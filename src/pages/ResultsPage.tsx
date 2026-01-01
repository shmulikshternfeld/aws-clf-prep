import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle, XCircle, Home, RotateCcw } from 'lucide-react';
import { questions } from '../data/questions-db';
import clsx from 'clsx';

export default function ResultsPage() {
    const { attemptId } = useParams();
    const [result, setResult] = useState<any>(null);

    useEffect(() => {
        const data = localStorage.getItem(`result-${attemptId}`);
        if (data) {
            setResult(JSON.parse(data));
        }
    }, [attemptId]);

    if (!result) return <div className="p-12 text-center">טוען תוצאות... (או שלא נמצאו)</div>;

    const passed = result.score >= 700;

    // Reconstruct questions
    const examQuestions = (result.questions as string[]).map(id => questions.find(q => q.id === id)).filter(Boolean);

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            {/* Score Card */}
            <div className={clsx(
                "p-8 rounded-2xl text-center shadow-lg border-t-8",
                passed ? "bg-white border-green-500" : "bg-white border-red-500"
            )}>
                <div className="mb-4 flex justify-center">
                    {passed ? <CheckCircle size={64} className="text-green-500" /> : <XCircle size={64} className="text-red-500" />}
                </div>
                <h1 className="text-4xl font-bold mb-2">{passed ? "עבר בהצלחה!" : "נכשל"}</h1>
                <div className="text-6xl font-black mb-4 flex justify-center items-baseline gap-2">
                    <span className={passed ? "text-green-600" : "text-red-600"}>{result.score}</span>
                    <span className="text-2xl text-gray-400">/1000</span>
                </div>
                <p className="text-gray-500 mb-6">
                    {passed
                        ? "כל הכבוד! הידע שלך תואם לדרישות ההסמכה. המשך לתרגל כדי לשמור על רמה גבוהה."
                        : "לא נורא, זה חלק מהתהליך. עבור על הטעויות שלך, חזק את הנושאים החלשים ונסה שוב."}
                </p>

                <div className="flex justify-center gap-4">
                    <Link to="/" className="flex items-center gap-2 px-6 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors font-bold text-gray-700">
                        <Home size={18} /> דף הבית
                    </Link>
                    <Link to="/exams" className="flex items-center gap-2 px-6 py-2 bg-aws-blue text-white rounded-lg hover:bg-aws-hover transition-colors font-bold shadow-lg shadow-blue-500/30">
                        <RotateCcw size={18} /> מבחן נוסף
                    </Link>
                </div>
            </div>

            {/* Review Section */}
            <div className="space-y-6">
                <h2 className="text-2xl font-bold">פירוט תשובות</h2>

                {examQuestions.map((q: any, idx: number) => {
                    const userAnswer = result.answers[q.id];
                    const isCorrect = userAnswer === q.correctAnswer;

                    return (
                        <div key={q.id} className={clsx(
                            "bg-white p-6 rounded-xl border border-gray-200 shadow-sm",
                            !isCorrect && "border-r-4 border-r-red-400"
                        )}>
                            <div className="flex gap-4">
                                <span className="font-bold text-gray-400">#{idx + 1}</span>
                                <div className="flex-grow">
                                    <h3 className="text-lg font-medium mb-4" dir="ltr">{q.text}</h3>

                                    <div className="space-y-2 mb-4" dir="ltr">
                                        {q.options.map((opt: string, optIdx: number) => {
                                            const isSelected = userAnswer === optIdx;
                                            const isTheCorrect = q.correctAnswer === optIdx;

                                            let style = "bg-gray-50 text-gray-600 border-transparent";
                                            if (isTheCorrect) style = "bg-green-100 text-green-800 border-green-200 font-bold";
                                            else if (isSelected && !isCorrect) style = "bg-red-100 text-red-800 border-red-200";

                                            return (
                                                <div key={optIdx} className={`p-3 rounded border ${style} flex justify-between`}>
                                                    <span>{opt}</span>
                                                    {isTheCorrect && <CheckCircle size={16} />}
                                                    {isSelected && !isCorrect && <XCircle size={16} />}
                                                </div>
                                            )
                                        })}
                                    </div>

                                    <div className="bg-blue-50 p-4 rounded-lg text-sm text-blue-900">
                                        <span className="font-bold block mb-1">Explanation:</span>
                                        <span dir="ltr">{q.explanation}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
