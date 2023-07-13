<template>
    <div>
        <main-layout>
            <section class="cart">
              <div class="container">
                <h2>Корзина на сумму {{getSum()}} ₽</h2>
                <div class="cart-empty" v-if="getCart().length === 0">Коризна пуста</div>
                <div class="products__list">
                  <div class="products__item" :key="index" v-for="(product, index) in getCart()">
                    <ProductCard
                      :product="product"
                      :showDeleteBtn="true"
                    />
                  </div>
                </div>
              </div>
            </section>
            <section class="advantages">
                <div class="container">
                    <div class="advantages__col">
                        <div class="advantages__text advantages__text--unfold advantages__text--overlay">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, lorem eu commodo porttitor erat. Amet mauris cursus bibendum in egestas. Nulla porttitor amet quam elit, mauris. Tortor egestas dignissim augue suspendisse rutrum pretium lobortis dolor. Commodo sagittis at amet faucibus faucibus id. Bibendum placerat convallis gravida eu quisque et augue. Sed dignissim amet ut vitae at ornare sed.Commodo sagittis at amet faucibus faucibus id. Bibendum placerat convallis gravida eu quisque et augue. Sed dignissim amet ut vitae at ornare sed.
                            <button type="button" class="advantages__more-btn element-interaction" v-if="!hideBtn" @click="readMore()">Читать полностью</button></div>
                    </div>
                    <div class="advantages__col">
                        <ul class="advantages__list">
                            <li class="advantages__item">
                                <div class="advantages__item-icon">
                                    <img src="../assets/img/delivery.svg" alt="">
                                </div>
                                <div class="advantages__item-text">Бесплатная<br> доставка</div>
                            </li>
                            <li class="advantages__item">
                                <div class="advantages__item-icon">
                                    <img src="../assets/img/list.svg" alt="">
                                </div>
                                <div class="advantages__item-text">Индивидуальный<br> дизайн</div>
                            </li>
                            <li class="advantages__item">
                                <div class="advantages__item-icon">
                                    <img src="../assets/img/ribbon-design.svg" alt="">
                                </div>
                                <div class="advantages__item-text">Бесплатная<br> примерка</div>
                            </li>
                            <li class="advantages__item">
                                <div class="advantages__item-icon">
                                    <img src="../assets/img/jewelry.svg" alt="">
                                </div>
                                <div class="advantages__item-text">Личный<br> подход</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </main-layout>
    </div>
</template>

<style lang="scss">
    .advantages {
        padding: 150px 0;
        .container {
            display: flex;
            justify-content: center;
        }
    }

    .advantages__col {
        &:nth-child(1) {
            flex-basis: 60%;
            max-width: 540px;
            margin-right: 103px;
        }
        :last-child {
            flex-grow: 1;
        }
    }

    .advantages__item-text {
        font-size: 1.6rem;
    }

    .advantages__more-btn {
        padding: 0;
        padding-bottom: 5px;
        border: none;
        background: none;
        cursor: pointer;
        font-weight: 500;
        font-size: 1.8rem;
        line-height: 2.1rem;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        border-bottom: 1px dashed #333333;
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 1;
    }

    .advantages__list {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 60px;
        grid-row-gap: 30px;
    }

    .advantages__item {
        justify-self: center;
    }

    .advantages__item-icon {
        text-align: center;
        margin-bottom: 15px;
    }

    .advantages__item-text {
        font-size: 1.6rem;
        line-height: 150%;
        text-align: center;
        color: #000000;
    }

    .products__list {
      padding: 95px 0;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 100px;
      grid-row-gap: 190px;
      position: relative;
    }

    .advantages__text {
        position: relative;
        &.advantages__text.advantages__text--unfold {
            max-height: 240px;
            overflow: hidden;
        }
        &.advantages__text.advantages__text--overlay:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            background: linear-gradient(180deg, rgba(249, 249, 249, 0) 0%, #F9F9F9 82.29%);
            height: 100%;
            width: 100%;
        }
    }

    @media (max-width: 768px) {
        .advantages {
            .container {
                flex-direction: column-reverse;
            }
        }
        .advantages__col {
            &:nth-child(1) {
                margin-right: 0;
                max-width: 100%;
            }
            &:nth-child(2) {
                margin-bottom: 50px;
            }
        }
    }
</style>

<script>
import MainLayout from '../layout/MainLayout.vue';
import ProductCard from '../components/ProductCard.vue';
import Popup from '../components/Popup.vue';
import { mapActions, mapGetters } from 'vuex';
    export default {
        data: function() {
            return {
                hideBtn: false
            }
        },
        created: function() {
          this.load()
        },
        methods: {
          ...mapActions({
            loadCart: 'cart/loadCart',
            load: 'products/loadProducts'
          }),
          ...mapGetters({
            getCart: 'cart/getCart',
            get: 'products/getProducts',
            getSum: 'cart/getSum',
          }),
        },
        components: {
            MainLayout,
            ProductCard,
            Popup
        }
    }
</script>
