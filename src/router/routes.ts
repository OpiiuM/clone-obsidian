export default [
    {
        path: '/',
        name: 'HomeView',
        component: () => import('@/views/HomeView.vue'),
        meta: {
            layout: 'AppLayoutMain',
        },
    },
    {
        path: '/:id',
        name: 'NoteView',
        component: () => import('@/views/NoteView.vue'),
        meta: {
            layout: 'AppLayoutMain',
        },
    },
];
