// ============================================
// DEK ALL — Centralized Mock Data
// Single source of truth for all role modules
// ============================================

export const RISK_LEVELS = {
    low: { label: 'low', badge: 'badge-success', color: 'var(--success)' },
    medium: { label: 'medium', badge: 'badge-warning', color: 'var(--warning)' },
    high: { label: 'high', badge: 'badge-danger', color: 'var(--danger)' },
};

export const users = {
    teacher: {
        id: 'U-T01',
        role: 'teacher',
        name: 'Ms. Sarah Chen',
        email: 's.chen@dekall.edu',
        avatar: '👩‍🏫',
    },
    parent: {
        id: 'U-P01',
        role: 'parent',
        name: 'David Thompson',
        email: 'd.thompson@email.com',
        avatar: '👨‍👦',
        childId: 'S001',
    },
    student: {
        id: 'S001',
        role: 'student',
        name: 'Alex Thompson',
        email: 'alex.t@student.dekall.edu',
        avatar: '🧒',
    },
};

export const students = [
    {
        id: 'S001',
        name: 'Alex Thompson',
        avatar: '🧒',
        grade: 'Grade 3',
        age: 8,
        progress: 72,
        streak: 5,
        riskLevel: 'medium',
    },
    {
        id: 'S002',
        name: 'Maya Patel',
        avatar: '👧',
        grade: 'Grade 3',
        age: 9,
        progress: 88,
        streak: 12,
        riskLevel: 'low',
    },
    {
        id: 'S003',
        name: 'Jordan Lee',
        avatar: '🧑',
        grade: 'Grade 4',
        age: 9,
        progress: 45,
        streak: 2,
        riskLevel: 'high',
    },
    {
        id: 'S004',
        name: 'Emma Wilson',
        avatar: '👩',
        grade: 'Grade 3',
        age: 8,
        progress: 91,
        streak: 14,
        riskLevel: 'low',
    },
    {
        id: 'S005',
        name: 'Noah Garcia',
        avatar: '👦',
        grade: 'Grade 4',
        age: 10,
        progress: 58,
        streak: 3,
        riskLevel: 'medium',
    },
];

export const tasks = [
    {
        id: 'T001',
        title: 'Phonics Chapter 4 – Blends',
        type: '📖 Reading',
        level: 'Grade 3',
        dueDate: '2026-06-25',
        assigned: ['S001', 'S002', 'S004'],
        status: { S001: 'pending', S002: 'completed', S004: 'completed' },
    },
    {
        id: 'T002',
        title: 'Number Sense – Place Value',
        type: '🔢 Math',
        level: 'Grade 3',
        dueDate: '2026-06-28',
        assigned: ['S001', 'S003', 'S005'],
        status: { S001: 'completed', S003: 'pending', S005: 'pending' },
    },
    {
        id: 'T003',
        title: 'Attention Training – Focus Blocks',
        type: '🧠 Therapy',
        level: 'All Levels',
        dueDate: '2026-07-02',
        assigned: ['S003', 'S005'],
        status: { S003: 'pending', S005: 'pending' },
    },
    {
        id: 'T004',
        title: 'Creative Writing – My Summer Story',
        type: '✏️ Writing',
        level: 'Grade 3–4',
        dueDate: '2026-07-05',
        assigned: ['S001', 'S002', 'S003', 'S004', 'S005'],
        status: {
            S001: 'pending',
            S002: 'pending',
            S003: 'pending',
            S004: 'completed',
            S005: 'pending',
        },
    },
];

/** Progress over time for parent AI Insights line chart (linked child: S001) */
export const progressTimeline = {
    studentId: 'S001',
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    overall: [48, 52, 58, 63, 68, 72],
    reading: [42, 48, 55, 60, 65, 70],
    math: [50, 53, 57, 62, 66, 74],
};

/** LD Screening summary for parent dashboard */
export const ldScreening = {
    studentId: 'S001',
    lastAssessed: '2026-06-12',
    overallStatus: 'review',
    confidence: 87,
    summary: 'AI analysis suggests mild phonological processing gaps with strong visual-spatial strengths.',
    domains: [
        { name: 'Phonological Awareness', score: 62, flag: 'medium', icon: '🔤' },
        { name: 'Reading Fluency', score: 58, flag: 'medium', icon: '📖' },
        { name: 'Working Memory', score: 71, flag: 'low', icon: '🧠' },
        { name: 'Math Reasoning', score: 78, flag: 'low', icon: '🔢' },
        { name: 'Attention & Focus', score: 55, flag: 'medium', icon: '🎯' },
    ],
    recommendations: [
        'Continue structured phonics practice 15 min/day',
        'Schedule follow-up screening in 6 weeks',
        'Share insights with classroom teacher',
    ],
};

/** AI insight snippets surfaced on the parent dashboard */
export const aiInsights = {
    studentId: 'S001',
    headline: 'Steady upward trend in overall learning progress',
    trend: 'up',
    weeklyChange: '+4%',
    highlights: [
        { label: 'Strongest Domain', value: 'Math Reasoning', badge: 'badge-success' },
        { label: 'Focus Area', value: 'Reading Fluency', badge: 'badge-warning' },
        { label: 'Engagement', value: '5-day streak', badge: 'badge-info' },
    ],
};

/** Hybrid scan session metadata for student module */
export const scanSessions = {
    lastScan: null,
    todayCount: 0,
    dailyGoal: 3,
};

export function getStudentById(id) {
    return students.find(s => s.id === id) ?? null;
}

export function getRiskMeta(level) {
    return RISK_LEVELS[level] ?? RISK_LEVELS.low;
}

export function getTasksForStudent(studentId) {
    return tasks.filter(t => t.assigned.includes(studentId));
}
