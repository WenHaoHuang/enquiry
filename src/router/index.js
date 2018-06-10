import Router from 'vue-router'

import routes from './routes';

const router = new Router({
    routes: routes
});

router.beforeEach((to,from,next)=>{
    const title = to.meta.title ? to.meta.title + '|' : ''
    document.title = title + '海外询价系统';
    next();
});

export default router;
