import { useState, useEffect, useCallback, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { exams, topicQuizzes } from '../data/exams-config';
import { questions } from '../data/questions-db';
import type { Question } from '../data/types';
import { Clock, Flag, ChevronLeft, ChevronRight, Grid } from 'lucide-react';
import clsx from 'clsx';



export default function ActiveExam() {
    const { examId } = useParams();

    const navigate = useNavigate();

    // Load Exam Configuration
    const examConfig = useMemo(() => {
        return exams.find(e => e.id === examId) || topicQuizzes.find(q => q.id === examId);
    }, [examId]);

    // Load Questions
    const examQuestions = useMemo(() => {
        if (!examConfig) return [];
        return examConfig.questionIds
            .map(id => questions.find(q => q.id === id))
            .filter((q): q is Question => !!q);
    }, [examConfig]);

    // State
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<string, number>>({});
    const [flagged, setFlagged] = useState<Record<string, boolean>>({});
    const [timeLeft, setTimeLeft] = useState((examConfig as any)?.timeLimitMinutes ? (examConfig as any).timeLimitMinutes * 60 : 90 * 60);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Shuffled Options Map: Record<questionId, number[]> -> maps DisplayIndex to OriginalIndex
    const [shuffledOptions, setShuffledOptions] = useState<Record<string, number[]>>({});

    // Initialize Shuffle
    useEffect(() => {
        const newShuffle: Record<string, number[]> = {};
        examQuestions.forEach(q => {
            const indices = [0, 1, 2, 3];
            // Fisher-Yates shuffle
            for (let i = indices.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [indices[i], indices[j]] = [indices[j], indices[i]];
            }
            newShuffle[q.id] = indices;
        });
        setShuffledOptions(newShuffle);
    }, [examQuestions]);

    // Timer
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(timer);
                    handleSubmit();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const handleSubmit = useCallback(() => {
        // Generate Result ID (random for now)
        const attemptId = Date.now().toString();
        // Save to local storage
        const result = {
            examId,
            timestamp: Date.now(),
            score: 0, // Calculate in Results page or here? Better here.
            answers,
            questions: examQuestions.map(q => q.id),
            shuffledOptions // Save shuffle state if we want to show exact view user saw (optional)
        };

        // Calculate Score
        let correctCount = 0;
        examQuestions.forEach(q => {
            if (answers[q.id] === q.correctAnswer) correctCount++;
        });
        const finalScore = Math.round((correctCount / examQuestions.length) * 1000);

        const resultsPayload = { ...result, score: finalScore, passed: finalScore >= 700 };
        localStorage.setItem(`result-${attemptId}`, JSON.stringify(resultsPayload));

        // Save to History (Append to list)
        try {
            const historyStr = localStorage.getItem('aws-clf-history');
            const history = historyStr ? JSON.parse(historyStr) : [];
            const newHistory = [resultsPayload, ...history];
            localStorage.setItem('aws-clf-history', JSON.stringify(newHistory));
        } catch (e) {
            console.error("Failed to save history", e);
        }

        navigate(`/results/${attemptId}`);
    }, [answers, examId, examQuestions, navigate]);

    if (!examConfig || !examQuestions.length) return <div className="p-10">Exam not found or empty.</div>;

    const currentQuestion = examQuestions[currentIndex];
    // Helper to format time
    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const handleOptionSelect = (originalIndex: number) => {
        setAnswers(prev => ({ ...prev, [currentQuestion.id]: originalIndex }));
    };

    const toggleFlag = () => {
        setFlagged(prev => ({ ...prev, [currentQuestion.id]: !prev[currentQuestion.id] }));
    };

    // Progress
    const answeredCount = Object.keys(answers).length;
    const progressPercent = (answeredCount / examQuestions.length) * 100;

    return (
        <div className="flex flex-col h-[calc(100vh-64px)]">
            {/* Top Bar */}
            <div className="bg-white border-b px-6 py-3 flex items-center justify-between shadow-sm flex-shrink-0 z-20 relative">
                <div className="flex items-center gap-4">
                    <h2 className="font-bold text-lg hidden sm:block">{(examConfig as any).title || (examConfig as any).topic}</h2>
                    <span className="bg-gray-100 px-2 py-1 rounded text-xs">שאלה {currentIndex + 1} מתוך {examQuestions.length}</span>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-2 font-mono text-xl font-bold text-aws-dark">
                    <Clock size={20} className={timeLeft < 300 ? "text-red-500 animate-pulse" : "text-gray-400"} />
                    <span className={timeLeft < 300 ? "text-red-600" : ""}>{formatTime(timeLeft)}</span>
                </div>

                <button
                    onClick={handleSubmit}
                    className="bg-aws-light text-aws-dark font-bold px-4 py-2 rounded shadow hover:bg-aws-hover hover:text-white transition-colors text-sm"
                >
                    סיים מבחן
                </button>
            </div>

            <div className="flex flex-grow overflow-hidden relative">
                {/* Main Question Area */}
                <div className="flex-grow overflow-y-auto p-4 sm:p-8 md:p-12 pb-24">
                    <div className="max-w-4xl mx-auto">
                        {/* Question Card */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-10">
                            <div className="flex justify-between items-start mb-6">
                                <h3 className="text-xl sm:text-2xl font-serif text-gray-900 leading-relaxed font-medium" dir="ltr">
                                    {currentQuestion.text}
                                </h3>
                                <button
                                    onClick={toggleFlag}
                                    className={clsx(
                                        "flex-shrink-0 p-2 rounded-full transition-colors",
                                        flagged[currentQuestion.id] ? "bg-orange-100 text-orange-600" : "text-gray-300 hover:bg-gray-100"
                                    )}
                                    title="סמן לבדיקה מאוחרת"
                                >
                                    <Flag fill={flagged[currentQuestion.id] ? "currentColor" : "none"} />
                                </button>
                            </div>

                            {/* Options */}
                            <div className="space-y-4" dir="ltr">
                                {shuffledOptions[currentQuestion.id]?.map((originalIndex) => {
                                    const isSelected = answers[currentQuestion.id] === originalIndex;
                                    return (
                                        <div
                                            key={originalIndex}
                                            onClick={() => handleOptionSelect(originalIndex)}
                                            className={clsx(
                                                "p-4 rounded-lg border-2 cursor-pointer transition-all flex items-center gap-4 group",
                                                isSelected ? "border-aws-blue bg-blue-50" : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                                            )}
                                        >
                                            <div className={clsx(
                                                "w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0",
                                                isSelected ? "border-aws-blue" : "border-gray-400 group-hover:border-gray-500"
                                            )}>
                                                {isSelected && <div className="w-3 h-3 bg-aws-blue rounded-full" />}
                                            </div>
                                            <span className={clsx("text-lg", isSelected ? "text-gray-900 font-medium" : "text-gray-700")}>
                                                {currentQuestion.options[originalIndex]}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar Trigger (Mobile) */}
                {!isSidebarOpen && (
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="absolute bottom-24 right-4 md:hidden bg-white p-3 rounded-full shadow-lg border border-gray-200 z-30"
                    >
                        <Grid />
                    </button>
                )}

                {/* Navigation Sidebar (Desktop: Static, Mobile: Floating) */}
                <div className={clsx(
                    "fixed inset-y-0 right-0 bg-white shadow-2xl w-80 transform transition-transform duration-300 z-40 flex flex-col pt-16 md:pt-0 md:relative md:transform-none md:w-72 md:shadow-none md:border-r border-gray-200",
                    isSidebarOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
                )}>
                    <div className="p-4 border-b flex justify-between items-center md:hidden">
                        <span className="font-bold">מפת השאלות</span>
                        <button onClick={() => setIsSidebarOpen(false)}><ChevronRight /></button>
                    </div>

                    <div className="p-4 overflow-y-auto flex-grow">
                        <div className="grid grid-cols-5 gap-2">
                            {examQuestions.map((q, idx) => {
                                const isAnswered = answers[q.id] !== undefined;
                                const isFlagged = flagged[q.id];
                                const isCurrent = idx === currentIndex;

                                return (
                                    <button
                                        key={q.id}
                                        onClick={() => { setCurrentIndex(idx); setIsSidebarOpen(false); }}
                                        className={clsx(
                                            "aspect-square rounded flex items-center justify-center text-sm font-bold relative transition-colors border",
                                            isCurrent ? "ring-2 ring-aws-blue border-transparent z-10" : "border-gray-200",
                                            isAnswered ? "bg-blue-100 text-blue-800" : "bg-gray-50 text-gray-500",
                                            isFlagged && "ring-2 ring-orange-400"
                                        )}
                                    >
                                        {idx + 1}
                                        {isFlagged && <div className="absolute top-0 right-0 w-2 h-2 bg-orange-500 rounded-full -mr-1 -mt-1" />}
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    <div className="p-4 border-t bg-gray-50">
                        <div className="flex justify-between text-sm mb-2">
                            <span>הושלם</span>
                            <span className="font-bold">{answeredCount}/{examQuestions.length}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-aws-blue h-2 rounded-full transition-all duration-500" style={{ width: `${progressPercent}%` }}></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Navigation Bar */}
            <div className="bg-white border-t p-4 flex justify-between items-center w-full z-20">
                <button
                    onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                    disabled={currentIndex === 0}
                    className="flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-100 disabled:opacity-50 transition-colors font-medium"
                >
                    <ChevronRight size={20} />
                    הקודם
                </button>

                <button
                    onClick={() => setCurrentIndex(prev => Math.min(examQuestions.length - 1, prev + 1))}
                    disabled={currentIndex === examQuestions.length - 1}
                    className="flex items-center gap-2 px-6 py-2 bg-aws-dark text-white rounded hover:bg-gray-800 disabled:opacity-50 transition-colors font-bold shadow-lg shadow-blue-900/20"
                >
                    הבא
                    <ChevronLeft size={20} />
                </button>
            </div>
        </div>
    );
}
