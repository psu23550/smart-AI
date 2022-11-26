const routes = [{
    path: '/',
    component: () =>
        import('layouts/MainLayout.vue'),
    children: [{
        path: '/',
        component: () =>
            import('pages/Index.vue')
    },
    {
        path: '/1',
        component: () =>
            import('pages/1.vue')
    },
    {
        path: '/2',
        component: () =>
            import('pages/2.vue')
    },
    {
        path: '/3',
        component: () =>
            import('pages/3.vue')
    },
    {
        path: '/4',
        component: () =>
            import('pages/4.vue')
    },
    {
        path: '/5',
        component: () =>
            import('pages/5.vue')
    },
    {
        path: '/6',
        component: () =>
            import('pages/6.vue')
    },
    {
        path: '/7',
        component: () =>
            import('pages/7.vue')
    },
    {
        path: '/7-1',
        component: () =>
            import('pages/7-1.vue')
    },
    {
        path: '/9',
        component: () =>
            import('pages/9.vue')
    },


    ]
},

// Always leave this as last one,
// but you can also remove it
{
    path: '*',
    component: () =>
        import('pages/Error404.vue')
}
]

export default routes