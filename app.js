// ============================================
// DEK ALL — App Router & Shared State
// ============================================
import {
    users,
    students,
    tasks,
    progressTimeline,
    ldScreening,
    aiInsights,
    scanSessions,
} from './mockData.js';
import { renderTeacherDashboard } from './modules/teacher.js';
import { renderParentDashboard } from './modules/parent.js';
import { renderStudentDashboard } from './modules/student.js';

export const AppState = {
    currentRole: 'teacher',
    currentUser: { ...users.teacher },
    students: [...students],
    tasks: [...tasks],
    progressTimeline: { ...progressTimeline },
    ldScreening: { ...ldScreening, domains: [...ldScreening.domains], recommendations: [...ldScreening.recommendations] },
    aiInsights: { ...aiInsights, highlights: [...aiInsights.highlights] },
    scanSessions: { ...scanSessions },
};

const ROLE_DEFAULTS = {
    teacher: 'teacher',
    parent: 'parent',
    student: 'student',
};

const ROLE_RENDERERS = {
    teacher: renderTeacherDashboard,
    parent: renderParentDashboard,
    student: renderStudentDashboard,
};

/** Teacher-only tabs that map to teacher renderer */
const TEACHER_TABS = new Set(['teacher', 'tasks', 'shared', 'my-class', 'reports', 'library']);
const PARENT_TABS = new Set(['parent', 'screening', 'progress', 'shared', 'messages']);
const STUDENT_TABS = new Set(['student', 'tasks', 'rewards', 'profile']);

let activeRoute = 'teacher';

export function navigate(route) {
    if (ROLE_DEFAULTS[route]) {
        AppState.currentRole = route;
        AppState.currentUser = { ...users[route] };
        activeRoute = ROLE_DEFAULTS[route];
    } else {
        activeRoute = route;
    }
    render();
}

function resolveTab() {
    const role = AppState.currentRole;
    if (role === 'teacher' && !TEACHER_TABS.has(activeRoute)) activeRoute = 'teacher';
    if (role === 'parent' && !PARENT_TABS.has(activeRoute)) activeRoute = 'parent';
    if (role === 'student' && !STUDENT_TABS.has(activeRoute)) activeRoute = 'student';
    return activeRoute;
}

function render() {
    const container = document.getElementById('app');
    if (!container) return;

    const tab = resolveTab();
    const renderer = ROLE_RENDERERS[AppState.currentRole];
    if (renderer) renderer(container, tab);
}

window.addEventListener('dekall-navigate', (e) => navigate(e.detail));
document.addEventListener('DOMContentLoaded', () => render());
