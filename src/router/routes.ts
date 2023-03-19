export default [
    {
        path: '/',
        name: '',
        component: () => import('@/views/HomeView.vue'),
        meta: {
            layout: 'AppLayoutMain',
        },
    },
];
