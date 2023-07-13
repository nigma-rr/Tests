<template>
  <div>
    <button :class="btnClass" @click="openPopup">Корзина ({{getCart().length}} товара)</button>
    <popup ref="popup">
      <h3>Корзина на сумму {{getSum()}} ₽</h3>
      <div class="cart-empty" v-if="getCart().length === 0">Коризна пуста</div>
      <div class="products__list" v-if="get().length > 0 && getCart().length > 0">
        <div class="products__item" :key="index" v-for="(product, index) in getCart()">
          <ProductCard
            :product="product"
            :showDeleteBtn="true"
          />
        </div>
      </div>
    </popup>
  </div>
</template>

<script>
import Popup from '../components/Popup.vue';
import {mapActions, mapGetters} from "vuex";
import ProductCard from "./ProductCard";

export default {
  components: {
    Popup,
    ProductCard
  },
  created: function() {
    this.load()
    this.loadCart()
  },
  props: {
    btnClass: {
      type: String,
    },
  },
  methods: {
    ...mapActions({
      loadCart: 'cart/loadCart',
      load: 'products/loadProducts'
    }),
    ...mapGetters({
      getCart: 'cart/getCart',
      get: 'products/getProducts',
      getSum: 'cart/getSum'
    }),
    openPopup() {
      this.$refs.popup.openPopup();
    }
  }
};
</script>
