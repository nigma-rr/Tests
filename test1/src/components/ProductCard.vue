<template>
    <div>
        <div class="products__image">
            <img :src="imageUrl != null ? imageUrl : defaultImg" alt="">
        </div>
        <div class="products__type">{{productType}}</div>
        <div class="products__title">{{title}}</div>
        <button type="button" class="products__add-cart button-style  element-interaction">{{price | priceDischarge}} ₽</button>
    </div>
</template>

<style lang="scss">
    .products__type {
        margin-top: 25px;
        margin-bottom: 10px;
        font-size: 1.6rem;
        line-height: 150%;
        text-align: center;
    }

    .products__title {
        font-weight: 600;
        font-size: 2.4rem;
        line-height: 140%;
        margin-bottom: 15px;
        text-align: center;
    }

    .products__image img {
        object-fit: contain;
    }
</style>

<script>
    export default {
        props: {
            imageUrl: {
                type: String,
                default: this.defaultImg
            },
            productType: {
                type: String
            },
            title: {
                type: String
            },
            price: {
                type: Number,
                required: true
            }
        },
        data: function() {
            return {
                defaultImg: require('../assets/img/img-404.png')
            }
        },
        filters: {
            priceDischarge(val) {
                return val.toLocaleString();
            }
        }
    }
</script>
