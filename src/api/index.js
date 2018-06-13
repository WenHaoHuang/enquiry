import axios from 'axios'
import qs from 'qs'
import * as Cookies from 'js-cookie'

const Ajax = {}

Ajax.install = (Vue) => {
    const $this = new Vue();
    Vue.prototype.$ajax = (options, successFn, errorFn) => {
        const api = options.api;
        let params = options.params ? options.params : {};
        params['sysCode'] = Cookies.get('sysCode');
        params['empNo'] = Cookies.get('empNo');
        params['accessToken'] = Cookies.get('accessToken');
        params = qs.stringify(params);
        axios.post(api, params)
            .then(res => {
                const response = res.data;
                if (response.retCode == 'SUCCESS') {
                    const data = response.data
                    successFn(data)
                } else {
                    if (typeof errorFn == 'function') {
                        errorFn(response)
                    }
                }
            })
            .catch(error => {
                if (typeof errorFn == 'function') {
                    errorFn(error)
                }
            })
    }
    Vue.prototype.$login = (options, successFn, errorFn) => {
        const api = '/auth/login'
        const params = qs.stringify(options)
        axios.post(api, params)
            .then((res) => {
                const response = res.data;
                if (response.retCode == 'SUCCESS') {
                    const data = response.data;
                    Cookies.set('accessToken', data.accessToken, {expires: 7});
                    Cookies.set('empNo', data.emp.empNo, {expires: 7});
                    Cookies.set('sysCode', data.role.syscode, {expires: 7});
                    const userInfo = {
                        cname: data.emp.empCname,
                        ename: data.emp.empEname,
                        userId: data.emp.id,
                        role: data.role
                    };
                    localStorage.setItem('userInfo', JSON.stringify(userInfo));
                    localStorage.setItem('rolecode', data.role.rolecode);
                    successFn(data)
                } else {
                    if (typeof errorFn == 'function') {
                        errorFn(response)
                    }
                }
            })
            .catch(error => {
                if (typeof errorFn == 'function') {
                    errorFn(error)
                }
            })
    }
    Vue.prototype.$logout = (successFn)=>{
        localStorage.clear();
        Cookies.remove('accessToken')
        Cookies.remove('empNo')
        Cookies.remove('sysCode')
        successFn('success')
    }
}
export default Ajax;
