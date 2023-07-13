<template>
    <div>
        <main-layout>
          <div>
            <div class="single__product">
              <div class="container">
                <div class="single__product-wrap">
                  <div class="single__product-col">
                    <ProductCard
                      :product = getSingleProduct()
                    />
                  </div>
                  <div class="single__product-col">
                    <h3>Описание</h3>
                    <div class="single__product-description">
                      {{getSingleProduct().description}}
                    </div>
                    <button class="single__product-buy button-style element-interaction" @click="updateCartTunnel({userId: 1, date: nowDate, products: [{category: getSingleProduct().category, description: getSingleProduct().description, image: getSingleProduct().image, price: getSingleProduct().price, title: getSingleProduct().title, rating: getSingleProduct().rating, productId:getSingleProduct().id, id:getSingleProduct().id, quantity:1}]})">Купить</button>
                    <popup ref="popup" class="product__added-pu">
                      <h3>Товар добавлен в корзину</h3>
                    </popup>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

    .single__product {
      .products__image img {
        max-height: 400px;
      }
      .single__product-wrap {
        display: flex;
        padding: 50px 0;
      }
      .single__product-col {
        width: 50%;
        :nth-child(1) {
          margin-right: 20px;
        }
      }
    }
    .single__product-buy {
      margin: 0;
      margin-top: 20px;
    }

    @media (max-width: 768px) {
      .single__product-wrap {
        flex-direction: column;
        .single__product-col {
          width: 100%;
          &:first-child {
            margin-bottom: 20px;
            margin-right: 0;
          }
        }
      }
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
            }
        },
        created: function() {
          this.loadSingleProduct(this.$route.params.id)
        },
        methods: {
          ...mapActions({
            loadSingleProduct: 'products/loadSingleProduct',
            updateCart: 'cart/updateCart',
          }),
          ...mapGetters({
            getSingleProduct: 'products/getSingleProduct'
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
        },
        components: {
            MainLayout,
            ProductCard,
            Popup
        }
    }
</script>
