export default function(instance) {
    return {
        sendForm(url, payload) {
            return instance.post(url, payload)
        }
    }
}