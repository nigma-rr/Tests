import instance from "./instance"
import sendModule from './send_form'
import filterModule from './filters'

export default {
    send: sendModule(instance),
    filter: filterModule(instance)
}