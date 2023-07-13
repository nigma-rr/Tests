import instance from "./instance"
import sendModule from './send_form'
import filterModule from './filters'
import cartModule from './cart'


export default {
    send: sendModule(instance),
    filter: filterModule(instance),
    cart: cartModule(instance),
    instance: instance
}
