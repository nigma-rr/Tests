export default function(instance) {
  return {
    async getUserCart(url) {
      try {
        const cart = await instance.get(url);
        return cart;
      } catch (error) {
        console.error(error)
      }
    },
    async updateCart(url, payload) {
      try {
        const cart = await instance.post(url, payload);
        return cart;
      } catch (error) {
        console.error(error)
      }
    }
  }
}
