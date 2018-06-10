const routes = [
    {
        path: '/',
        redirect: '/login',
        meta: {
            title: '登录'
        },
    },
    {
        name: 'login',
        path: '/login',
        component: resolve => require(['../views/login.vue'], resolve),
        meta: {
            title: '登录'
        }
    },
    {
        name: 'admin',
        path: '/admin',
        component: resolve => require(['../views/index.vue'], resolve),
        meta: {
            title: '超级管理员'
        }
    },
]

export default routes

