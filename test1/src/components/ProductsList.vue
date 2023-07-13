<template>
    <section class="products">
        <div class="container">
            <div class="product__filters">
                <div class="product__filter-wrap">
                    <select name="price" class="product__filter-select element-interaction" v-model="filters.price" @change="setWithPriceSort($event)">
                        <option value="" selected>Цена</option>
                        <option value="min">Дороже</option>
                        <option value="max">Дешевле</option>
                    </select>
                </div>
                <div class="product__filter-wrap">
                    <select name="who" class="product__filter-select element-interaction" v-model="filters.who" @change="setProductsFromCategory($event)">
                      <option value="" selected>Категория</option>
                      <option :value="category" v-for="(category, index) in getCategories()">{{category}}</option>
                    </select>
                </div>
            </div>
            <div class="products__list">
                <div class="products__item" :key="index" v-for="(product, index) in products(productsOffset)">
                    <ProductCard
                      :product = product
                    />
                </div>
            </div>
            <button type="button" class="products__more button-style element-interaction" v-if="products().length >= productsOffset" @click="productsOffset+=offsetRange">Покажите еще</button>
        </div>
    </section>
</template>

<style lang="scss">
    .products {
        padding-top: 100px;
    }
    .products__list {
        padding: 95px 0;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 100px;
        grid-row-gap: 190px;
        position: relative;
    }

    .products__item {
        text-decoration: none;
        &::before {
            content: '';
            height: 1px;
            display: none;
            width: 100%;
            left: 0;
            transform: translateY(-95px);
            position: absolute;
            background: #D6D6D6;
        }
        &:not(:first-child):nth-child(3n+4)::before {
            display: block;
        }
    }

    .products__more {
        font-weight: 500;
        padding: 15px 35px;
    }

    .product__filters {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-gap: 30px;
    }

    .product__filter-select {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        width: 100%;
        font-size: 1.6rem;
        line-height: 150%;
        color: #333333;
        background: transparent;
        border: none;
        padding-bottom: 10px;
        border-bottom: 1px solid #D6D6D6;
    }

    .product__filter-wrap {
        position: relative;
        &:before {
            content: url("../assets/img/triangle.svg");
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(calc(-50% - 5px));
            z-index: -1;
        }
    }

    @media (max-width: 768px) {
        .product__filters {
            grid-template-columns: repeat(3, 1fr);
        }
        .products__list {
            grid-template-columns: repeat(2, 1fr);
        }
        .products__item {
            &:not(:first-child):nth-child(3n+4)::before {
                display: none;
            }
            &:not(:first-child):nth-child(2n+3)::before {
                display: block;
            }
        }
    }

    @media (max-width: 480px) {
        .product__filters {
            grid-template-columns: repeat(1, 1fr);
        }
        .products__list {
            grid-template-columns: repeat(1, 1fr);
        }
        .products__item {
            &:not(:first-child)::before {
                display: block!important;
            }
        }
    }
</style>

<script>
import ProductCard from './ProductCard.vue'
import { mapActions, mapGetters } from 'vuex'
    export default {
        data: function() {
            return {
                productsOffset: 6,
                offsetRange: 3,
                filters: {
                    brand: "",
                    price: "",
                    who: "",
                    collection: "",
                    season: "",
                    event: ""
                }
            }
        },
        components: {
            ProductCard
        },
        methods: {
            ...mapActions({
                load: 'products/loadProducts',
                loadCategories: 'products/loadCategories',
                setProductsFromCategory: 'products/setProductsFromCategory',
                setWithPriceSort: 'products/setWithPriceSort',
            }),
            ...mapGetters({
                get: 'products/getProducts',
                getCategories: 'products/getCategories'
            }),
            getArrRange(array, range, part) {
                let start = range * (part - 1)
                let end = (range * part)
                return array.slice(start, end)
            },
            products() {
                return this.getArrRange(this.get(), this.productsOffset, 1)
            },
        },
        created: function() {
            this.load()
            this.loadCategories()
        },
        computed: {

        }
    }
</script>
