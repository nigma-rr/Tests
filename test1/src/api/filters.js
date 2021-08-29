export default function(instance) {
    return {
        changeFilter(url, payload) {
            return instance.post(url, payload)
        }
    }
}