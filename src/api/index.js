import axios from 'axios'
import qs from 'qs'

const Ajax = {}

Ajax.install = (Vue) => {
    Vue.prototype.$ajax = (options, successFn, errorFn) => {
        const api = '/Nivana.beta/' + options.api
        let params = options.params ? options.params : {}
        params = qs.stringify(params)
        axios.post(api, params)
            .then(response => {
                const data = response.data
                successFn(data)
            })
            .catch(error => {
                errorFn(error)
            })
    }
    Vue.prototype.$login = (options, successFn,errorFn) => {
        const api = '/Nivana.beta/loginWeb'
        const params = qs.stringify(options)
        axios.post(api, params)
            .then((response) => {
                const data = response.data
                successFn(data)
            })
            .catch(error => {
                errorFn(error)
            })
    }
}
export default Ajax;
