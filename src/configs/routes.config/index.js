import React from 'react'
import authRoute from './authRoute'

export const publicRoutes = [
    ...authRoute
]

export const protectedRoutes = [
    {
        key: 'home',
        path: '/home',
        component: React.lazy(() => import('views/Home')),
        authority: [],
    },

    {
        key: 'schoolMenu.item1',
        path: '/school-registration',
        component: React.lazy(() => import('views/School/School_registration/index')),
        authority: [],
    },
    {
        key: 'schoolMenu.item2',
        path: '/school-list',
        component: React.lazy(() => import('views/School/SchoolTable')),
        authority: [],
    },
    {
        key: 'form',
        path: '/form',
        component: React.lazy(() => import('views/dummyForm')),
        authority: [],
    },
    {
        key: 'fee',
        path: '/fee-details',
        component: React.lazy(() => import('views/Fees/Student_Fees')),
        authority: [],
    },
    {
        key: 'time-table',
        path: '/time-table',
        component: React.lazy(() => import('views/TimeTable')),
        authority: [],
    },
    {
        key: 'table',
        path: '/table',
        component: React.lazy(() => import('views/dummyTable')),
        authority: [],
    },
    // {
    //     key: 'exam',
    //     path: '/exam',
    //     component: React.lazy(() => import('views/Exam')),
    //     authority: [],
    // },

    {
        key: 'section',
        path: '/section-class',
        component: React.lazy(() => import('views/section_class')),
        authority: [],
    },
    {
        key: 'addsubjects',
        path: '/add-subjects',
        component: React.lazy(() => import('views/Add_Subjects')),
        authority: [],
    },
    {
        key: 'chaptermaster',
        path: '/chapter-master',
        component: React.lazy(() => import('views/Chapter_Master')),
        authority: [],
    },
    {
        key: 'studentMenu.item1',
        path: '/student-registration',
        component: React.lazy(() => import('views/student/Student_Reg')),
        authority: [],
    },

    {
        key: 'studentMenu.item2',
        path: '/student-list',
        component: React.lazy(() => import('views/student/StudentTable/index')),
        authority: [],
    },

    {
        key: 'examMenu.item1',
        path: '/exam-table',
        component: React.lazy(() => import('views/Exam/Exam_Table')),
        authority: [],
    },

    {
        key: 'examMenu.item2',
        path: '/marks-entry',
        component: React.lazy(() => import('views/Exam/Marks_Entry')),
        authority: [],
    },

    {
        key: 'feeMenu.item1',
        path: '/student-fees',
        component: React.lazy(() => import('views/Fees/Student_Fees')),
        authority: [],
    },
    {
        key: 'feeMenu.item2',
        path: '/fee-profile',
        component: React.lazy(() => import('views/Fees/Fee_Profile')),
        authority: [],
    },
    {
        key: 'feeMenu.item3',
        path: '/fee-installments',
        component: React.lazy(() => import('views/Fees/Fee_Installments')),
        authority: [],
    },
    {
        key: 'transportMenu.item1',
        path: '/transport-profile',
        component: React.lazy(() => import('views/Transport/TransportProfile')),
        authority: [],
    },
    {
        key: 'transportMenu.item2',
        path: '/transport-reg',
        component: React.lazy(() => import('views/Transport/TransportRegistration')),
        authority: [],
    },
    {
        key: 'subjectMenu.item1',
        path: '/subject-master',
        component: React.lazy(() => import('views/Subjects/Subject_Master')),
        authority: [],
    },
    {
        key: 'subjectMenu.item2',
        path: '/home-work',
        component: React.lazy(() => import('views/Subjects/HomeWork')),
        authority: [],
    },
    /** Example purpose only, please remove */
    {
        key: 'singleMenuItem',
        path: '/single-menu-view',
        component: React.lazy(() => import('views/demo/SingleMenuView')),
        authority: [],
    },
    {
        key: 'collapseMenu.item1',
        path: '/collapse-menu-item-view-1',
        component: React.lazy(() => import('views/demo/CollapseMenuItemView1')),
        authority: [],
    },
    {
        key: 'collapseMenu.item2',
        path: '/collapse-menu-item-view-2',
        component: React.lazy(() => import('views/demo/CollapseMenuItemView2')),
        authority: [],
    },
    {
        key: 'groupMenu.single',
        path: '/group-single-menu-item-view',
        component: React.lazy(() => import('views/demo/GroupSingleMenuItemView')),
        authority: [],
    },
    {
        key: 'groupMenu.collapse.item1',
        path: '/group-collapse-menu-item-view-1',
        component: React.lazy(() => import('views/demo/GroupCollapseMenuItemView1')),
        authority: [],
    },
    {
        key: 'groupMenu.collapse.item2',
        path: '/group-collapse-menu-item-view-2',
        component: React.lazy(() => import('views/demo/GroupCollapseMenuItemView2')),
        authority: [],
    },
]