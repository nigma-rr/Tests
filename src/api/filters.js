export default function(instance) {
    return {
        async changeFilter(url, payload) {
            return await instance.get(url)
        }
    }
}
