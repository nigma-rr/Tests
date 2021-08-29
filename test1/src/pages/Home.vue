<template>
    <div>
        <main-layout>
            <div class="catalog-btn__wrap">
                <router-link to="/catalog/" class="catalog-btn button-style element-interaction">Смотреть каталог</router-link>
            </div>
        </main-layout>
    </div>
</template>

<style lang="scss">
    .catalog-btn__wrap {
        padding: 30px 0;
        display: flex;
        justify-content: center;
    }
</style>

<script>
import Header from '../components/Header.vue';
import MainLayout from '../layout/MainLayout.vue';
    export default {
        data: function() {
            return {
            }
        },
        components: {
            MainLayout
        }
    }
</script>
