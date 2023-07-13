<template>
    <div>
      <router-link :to="'/product/' + product.id" class="product__info-wrap">
        <div class="products__image">
          <img :src="product.image" alt="">
        </div>
        <div class="products__type">{{product.category}}</div>
        <div class="products__title">{{product.title}}</div>
      </router-link>
      <div class="products__add-wrap">
        <button type="button" v-if="!showDeleteBtn" @click="updateCartTunnel({userId: 1, date: nowDate, products: [{category: product.category, description: product.description, image: product.image, price: product.price, title: product.title, rating: product.rating, productId:product.id, id:product.id, quantity:1}]})" class="products__add-cart button-style  element-interaction">{{product.price | priceDischarge}} ₽</button>
        <button type="button" v-else @click="updateCartTunnel({userId: 1, date: nowDate, products: [{category: product.category, description: product.description, image: product.image, price: product.price, title: product.title, rating: product.rating, productId:product.id, id:product.id, quantity:1}]})" class="products__add-cart button-style  element-interaction">{{product.price * product.quantity | priceDischarge}} ₽ ({{product.quantity}} шт.)</button>
        <button type="button" v-if="showDeleteBtn" @click="deleteFromCart({userId: 1, date: nowDate, products: [{category: product.category, description: product.description, image: product.image, price: product.price, title: product.title, rating: product.rating, productId:product.id, id:product.id, quantity:1}]})" class="products__add-cart products__add-cart--del button-style  element-interaction">Удалить</button>
        <popup ref="popup" class="product__added-pu">
          <h3>Товар добавлен в корзину</h3>
        </popup>
      </div>
    </div>
</template>

<style lang="scss">
    .products__type {
        margin-top: 25px;
        margin-bottom: 10px;
        font-size: 1.6rem;
        line-height: 150%;
        text-align: center;
        color: #000;
        text-decoration: none;
    }

    .products__title {
        font-weight: 600;
        font-size: 2.4rem;
        line-height: 140%;
        margin-bottom: 15px;
        text-align: center;
        color: #000;
    }

    .products__add-cart--del {
      background: #af3838;
      transition: 0.4s ease;
    }

    .products__item {
      > div {
        display: flex;
        flex-direction: column;
        height: 100%;
      }
    }

    .products__image {
      height: 100%;
      max-height: 400px;
    }

    .product__info-wrap {
      text-decoration: none;
    }

    .products__add-wrap {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 15px;
      margin-top: auto;
      & > button {
        width: 100%;
      }
    }

    .products__image img {
      object-fit: contain;
      height: 100%;
      width: 100%;
      min-height: 400px;
      object-position: center center;
    }
</style>

<script>
    import {mapActions} from "vuex";
    import Popup from '../components/Popup.vue';

    export default {
        components: {
          Popup,
        },
        props: {
            product: {
                type: [Object, Array],
            },
            showDeleteBtn: {
              type: Boolean
            },
        },
        data: function() {
            return {

            }
        },
        filters: {
            priceDischarge(val) {
              if (val)
                return val.toLocaleString();
            }
        },
        methods: {
          ...mapActions({
            updateCart: 'cart/updateCart',
            deleteFromCart: 'cart/deleteFromCart'
          }),
          updateCartTunnel(payload) {
            this.updateCart(payload)
            this.$refs.popup.openPopup()
          }
        },
      computed: {
        nowDate() {
          let currentDate = new Date();
          let year = currentDate.getFullYear();
          let month = String(currentDate.getMonth() + 1).padStart(2, '0');
          let day = String(currentDate.getDate()).padStart(2, '0');
          let formattedDate = `${year}-${month}-${day}`;
          return formattedDate;
        }
      }
    }
</script>
