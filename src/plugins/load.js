export default {
    install(Vue) {
        Vue.prototype.$load = async (action) => {
            try {
               await action()
            } catch(error) {
                console.log(error.response.data)
            }
        }
    }
}