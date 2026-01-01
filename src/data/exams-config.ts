import type { Exam, Quiz } from './types';
import { questions } from './questions-db';

// Helper to get all IDs (in a real scenario, we'd have 1300 IDs)


// We will generate 20 Mock Exams.
// For now, since we have a limited DB, we will reuse the same 10 Qs for demonstration.
// In the final version, these arrays will be unique sets of 65 IDs.

// Helper to separate questions by domain
const questionsByDomain = {
    'Cloud Concepts': questions.filter(q => q.domain === 'Cloud Concepts'),
    'Security and Compliance': questions.filter(q => q.domain === 'Security and Compliance'),
    'Cloud Technology and Services': questions.filter(q => q.domain === 'Cloud Technology and Services'),
    'Billing, Pricing, and Support': questions.filter(q => q.domain === 'Billing, Pricing, and Support')
};

// Target counts per domain based on CLF-C02 percentages (Total 65)
// Concepts: 24% (~16), Security: 30% (~19), Tech: 34% (~22), Billing: 12% (~8)
const domainCounts = {
    'Cloud Concepts': 16,
    'Security and Compliance': 20,
    'Cloud Technology and Services': 22,
    'Billing, Pricing, and Support': 7
};

// Simple seed-based random to ensure determinism for each exam ID
function getSeededRandom(seed: number) {
    let value = seed;
    // Linear Congruential Generator
    return function () {
        value = (value * 9301 + 49297) % 233280;
        return value / 233280;
    }
}

// Function to get random subset from array using seeded random
function getRandomSubset(sourceArray: any[], count: number, rng: () => number) {
    // If we request more than available, just return all available (or duplicate if we wanted to be strict, but for now unique is better)
    // To handle smaller pools than requested, we take what we have.
    const available = [...sourceArray];
    const result: string[] = [];

    // Fisher-Yates shuffle
    for (let i = available.length - 1; i > 0; i--) {
        const j = Math.floor(rng() * (i + 1));
        [available[i], available[j]] = [available[j], available[i]];
    }

    return available.slice(0, count).map(q => q.id);
}

// Generate 20 Mock Exams with weighted distribution
export const exams: Exam[] = Array.from({ length: 20 }, (_, i) => {
    // Unique seed for each exam
    const rng = getSeededRandom(i * 12345 + 6789);

    const qConcepts = getRandomSubset(questionsByDomain['Cloud Concepts'], domainCounts['Cloud Concepts'], rng);
    const qSecurity = getRandomSubset(questionsByDomain['Security and Compliance'], domainCounts['Security and Compliance'], rng);
    const qTech = getRandomSubset(questionsByDomain['Cloud Technology and Services'], domainCounts['Cloud Technology and Services'], rng);
    const qBilling = getRandomSubset(questionsByDomain['Billing, Pricing, and Support'], domainCounts['Billing, Pricing, and Support'], rng);

    // Combine and shuffle the final exam questions so they aren't grouped by topic
    const allSelectedIds = [...qConcepts, ...qSecurity, ...qTech, ...qBilling];

    // Final shuffle of the combined exam
    for (let j = allSelectedIds.length - 1; j > 0; j--) {
        const k = Math.floor(rng() * (j + 1));
        [allSelectedIds[j], allSelectedIds[k]] = [allSelectedIds[k], allSelectedIds[j]];
    }

    return {
        id: `exam-${i + 1}`,
        title: `Mock Exam #${i + 1}`,
        questionIds: allSelectedIds,
        timeLimitMinutes: 90
    };
});

export const topicQuizzes: Quiz[] = [
    {
        id: 'quiz-concepts',
        topic: 'Cloud Concepts',
        questionIds: questions.filter(q => q.domain === 'Cloud Concepts').map(q => q.id)
    },
    {
        id: 'quiz-security',
        topic: 'Security and Compliance',
        questionIds: questions.filter(q => q.domain === 'Security and Compliance').map(q => q.id)
    },
    {
        id: 'quiz-tech',
        topic: 'Cloud Technology and Services',
        questionIds: questions.filter(q => q.domain === 'Cloud Technology and Services').map(q => q.id)
    },
    {
        id: 'quiz-billing',
        topic: 'Billing, Pricing, and Support',
        questionIds: questions.filter(q => q.domain === 'Billing, Pricing, and Support').map(q => q.id)
    }
];
