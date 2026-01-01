import { useState, useEffect } from 'react';

export interface ExamResult {
    attemptId: string;
    examId: string;
    timestamp: number;
    score: number;
    passed: boolean;
    answers: Record<string, number>;
    questions: string[];
}

const STORAGE_KEY = 'aws-clf-history';

export function useExamHistory() {
    const [history, setHistory] = useState<ExamResult[]>([]);
    const [stats, setStats] = useState({
        completed: 0,
        averageScore: 0,
        passedCount: 0
    });

    useEffect(() => {
        // Load history on mount
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                setHistory(parsed);
                calculateStats(parsed);
            } catch (e) {
                console.error("Failed to parse history", e);
            }
        }
    }, []);

    const calculateStats = (results: ExamResult[]) => {
        if (results.length === 0) {
            setStats({ completed: 0, averageScore: 0, passedCount: 0 });
            return;
        }

        const totalScore = results.reduce((acc, curr) => acc + curr.score, 0);
        const passed = results.filter(r => r.passed).length;

        setStats({
            completed: results.length,
            averageScore: Math.round(totalScore / results.length),
            passedCount: passed
        });
    };

    const saveResult = (result: ExamResult) => {
        setHistory(prev => {
            const newHistory = [result, ...prev];
            localStorage.setItem(STORAGE_KEY, JSON.stringify(newHistory));
            calculateStats(newHistory);
            return newHistory;
        });
    };

    return { history, stats, saveResult };
}
