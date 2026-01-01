export interface Question {
    id: string;
    text: string;
    options: string[];
    correctAnswer: number; // Index 0-3
    explanation: string;
    domain: 'Cloud Concepts' | 'Security and Compliance' | 'Cloud Technology and Services' | 'Billing, Pricing, and Support';
}

export interface Exam {
    id: string;
    title: string;
    questionIds: string[]; // Pointer to questions in the DB
    timeLimitMinutes: number;
}

export interface Quiz {
    id: string;
    topic: string;
    questionIds: string[];
}

export interface Concept {
    term: string;
    definition: string;
    category: string;
}
