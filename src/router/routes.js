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
        name: 'askprice',
        path: '/askprice',
        redirect: '/askprice/index',
        component: resolve => require(['../views/askprice.vue'], resolve),
        children:[
            {
                name: 'askpriceIndex',
                path: '/askprice/index',
                component: resolve => require(['../views/askprice/index.vue'], resolve),
                meta: {
                    title: '我的询价'
                }
            },
            {
                name: 'askpriceDemand',
                path: '/askprice/demand',
                component: resolve => require(['../views/askprice/demand.vue'], resolve),
                meta: {
                    title: '提交需求'
                }
            },
            {
                name: 'askpriceTask',
                path: '/askprice/task',
                component: resolve => require(['../views/askprice/task.vue'], resolve),
                meta: {
                    title: '任务抢单'
                }
            },
            {
                name: 'askpriceOffer',
                path: '/askprice/offer',
                component: resolve => require(['../views/askprice/offer.vue'], resolve),
                meta: {
                    title: '上传报价'
                }
            },
            {
                name: 'askpriceFeedback',
                path: '/askprice/feedback',
                component: resolve => require(['../views/askprice/feedback.vue'], resolve),
                meta: {
                    title: '报价反馈'
                }
            },
            {
                name: 'askpriceOrder',
                path: '/askprice/order',
                component: resolve => require(['../views/askprice/order.vue'], resolve),
                meta: {
                    title: '确认订单'
                }
            },
            {
                name: 'askpriceProgress',
                path: '/askprice/progress',
                component: resolve => require(['../views/askprice/progress.vue'], resolve),
                meta: {
                    title: '进展看板'
                }
            },
            {
                name: 'askpriceData',
                path: '/askprice/data',
                component: resolve => require(['../views/askprice/data.vue'], resolve),
                meta: {
                    title: '数据看板'
                }
            },
            {
                name: 'askpriceFiles',
                path: '/askprice/files',
                component: resolve => require(['../views/askprice/files.vue'], resolve),
                meta: {
                    title: '查询归档'
                }
            },
            {
                name: 'askpriceInquiryDetail',
                path: '/askprice/inquiry/detail',
                component: resolve => require(['../views/askprice/inquiryDetail.vue'], resolve),
                meta: {
                    title: '询单详情'
                }
            },
        ]
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

