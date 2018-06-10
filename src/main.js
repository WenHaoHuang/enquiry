/**
 * @author: wenhao.huang
 * @date:   2018/6/9
 * @module: main.js
 */

import Vue from 'vue'
import App from './App'
import router from './router'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import notify from 'components/notice/index'
Vue.use(notify)

import ajax from './api/index.js'
Vue.use(ajax)

import utils from './utils/index.js'
Vue.prototype.$utils = utils

const bus = new Vue()
Vue.prototype.$bus = bus

Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
