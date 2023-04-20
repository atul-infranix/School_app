import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_COLLAPSE,
    NAV_ITEM_TYPE_ITEM
} from 'constants/navigation.constant'

const navigationConfig = [
    {
        key: 'home',
        path: '/home',
        title: 'Home',
        translateKey: 'nav.home',
        icon: 'home',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: []
    },
    {
        key: 'form',
        path: '/form',
        title: 'Form',
        translateKey: 'nav.form',
        icon: 'home',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: []
    },
    {
        key: 'table',
        path: '/table',
        title: 'Table',
        translateKey: 'nav.table',
        icon: 'home',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: []
    },
    {
        key: 'time-table',
        path: '/time-table',
        title: 'Time Table',
        translateKey: 'nav.time-table',
        icon: 'home',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: []
    },
    {
        key: 'section',
        path: '/section-class',
        title: 'Sections',
        translateKey: 'nav.section',
        icon: 'home',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: []
    },
    // {
    //     key: 'exam',
    //     path: '/exam',
    //     title: 'Exam',
    //     translateKey: 'nav.exam',
    //     icon: 'home',
    //     type: NAV_ITEM_TYPE_ITEM,
    //     authority: [],
    //     subMenu: []
    // },
    {
        key: 'addsubjects',
        path: '/add-subjects',
        title: 'Add Subjects',
        translateKey: 'nav.addsubjects',
        icon: 'home',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: []
    },
    {
        key: 'chaptermaster',
        path: '/chapter-master',
        title: 'Chapter Master',
        translateKey: 'nav.chaptermaster',
        icon: 'home',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: []
    },
    /** Example purpose only, please remove */
    {
        key: 'singleMenuItem',
        path: '/single-menu-view',
        title: 'Single menu item',
        translateKey: 'nav.singleMenuItem',
        icon: 'singleMenu',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: []
    },
    {
        key: 'studentMenu',
        path: '',
        title: 'Student Menu',
        translateKey: 'nav.studentMenu.studentMenu',
        icon: 'studentMenu',
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [],
        subMenu: [
            {
                key: 'studentMenu.item1',
                path: '/student-registration',
                title: 'Student Registration',
                translateKey: 'nav.studentMenu.item1',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: []
            },
            {
                key: 'studentMenu.item2',
                path: '/student-list',
                title: 'Student List',
                translateKey: 'nav.studentMenu.item2',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: []
            },
        ]
    },
    {
        key: 'schoolMenu',
        path: '',
        title: 'School Menu',
        translateKey: 'nav.schoolMenu.schoolMenu',
        icon: 'schoolMenu',
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [],
        subMenu: [
            {
                key: 'schoolMenu.item1',
                path: '/school-registration',
                title: 'School Registration',
                translateKey: 'nav.schoolMenu.item1',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: []
            },
            {
                key: 'schoolMenu.item2',
                path: '/school-list',
                title: 'School List',
                translateKey: 'nav.schoolMenu.item2',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: []
            }
        ]
    },
    // {
    //     key: 'fee',
    // 	path: '/fee-details',
    // 	title: 'Fee Details',
    // 	translateKey: 'nav.fee',
    // 	icon: 'home',
    // 	type: NAV_ITEM_TYPE_ITEM,
    // 	authority: [],
    //     subMenu: []
    // },
    {
        key: 'feeMenu',
        path: '',
        title: 'Fee Menu',
        translateKey: 'nav.feeMenu.feeMenu',
        icon: 'feeMenu',
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [],
        subMenu: [
            {
                key: 'feeMenu.item1',
                path: '/student-fees',
                title: 'Student Fees',
                translateKey: 'nav.feeMenu.item1',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: []
            },
            {
                key: 'feeMenu.item2',
                path: '/fee-profile',
                title: 'Fee Profile',
                translateKey: 'nav.feeMenu.item3',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: []
            },
            {
                key: 'feeMenu.item3',
                path: '/fee-installments',
                title: 'Fee Intallments',
                translateKey: 'nav.feeMenu.item3',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: []
            }
        ]
    },
    {
        key: 'examMenu',
        path: '',
        title: 'Exam Menu',
        translateKey: 'nav.examMenu.examMenu',
        icon: 'examMenu',
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [],
        subMenu: [
            {
                key: 'examMenu.item1',
                path: '/exam-table',
                title: 'Exam Table',
                translateKey: 'nav.examMenu.item1',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: []
            },
            {
                key: 'examMenu.item2',
                path: '/marks-entry',
                title: 'Marks Entry',
                translateKey: 'nav.examMenu.item2',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: []
            }
        ]
    },
    {
        key: 'transportMenu',
        path: '',
        title: 'Transport Menu',
        translateKey: 'nav.transportMenu.transportMenu',
        icon: 'transportMenu',
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [],
        subMenu: [
            {
                key: 'transportMenu.item1',
                path: '/transport-profile',
                title: 'Transport Profile',
                translateKey: 'nav.transportMenu.item1',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: []
            },
            {
                key: 'transportMenu.item2',
                path: '/transport-reg',
                title: 'Transport Registration',
                translateKey: 'nav.transportMenu.item2',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: []
            }
        ]
    },
    {
        key: 'subjectMenu',
        path: '',
        title: 'Subject Menu',
        translateKey: 'nav.subjectMenu.subjectMenu',
        icon: 'subjectMenu',
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [],
        subMenu: [
            {
                key: 'subjectMenu.item1',
                path: '/subject-master',
                title: 'Subject Master',
                translateKey: 'nav.subjectMenu.item1',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: []
            },
            {
                key: 'subjectMenu.item2',
                path: '/home-work',
                title: 'Home Work',
                translateKey: 'nav.subjectMenu.item2',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: []
            }
        ]
    },
    {
        key: 'groupMenu',
        path: '',
        title: 'Group Menu',
        translateKey: 'nav.groupMenu.groupMenu',
        icon: '',
        type: NAV_ITEM_TYPE_TITLE,
        authority: [],
        subMenu: [
            {
                key: 'groupMenu.single',
                path: '/group-single-menu-item-view',
                title: 'Group single menu item',
                translateKey: 'nav.groupMenu.single',
                icon: 'groupSingleMenu',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: []
            },
            {
                key: 'groupMenu.collapse',
                path: '',
                title: 'Group collapse menu',
                translateKey: 'nav.groupMenu.collapse.collapse',
                icon: 'groupCollapseMenu',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [],
                subMenu: [
                    {
                        key: 'groupMenu.collapse.item1',
                        path: '/group-collapse-menu-item-view-1',
                        title: 'Menu item 1',
                        translateKey: 'nav.groupMenu.collapse.item1',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [],
                        subMenu: []
                    },
                    {
                        key: 'groupMenu.collapse.item2',
                        path: '/group-collapse-menu-item-view-2',
                        title: 'Menu item 2',
                        translateKey: 'nav.groupMenu.collapse.item2',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [],
                        subMenu: []
                    },
                ]
            }
        ]
    }
]

export default navigationConfig