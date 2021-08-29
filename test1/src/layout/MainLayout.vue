<template>
    <div class="main">
        <Header/>
        <slot></slot>
        <Footer/>
    </div>
</template>

<style>
    .main {
        padding-top: 112px;
    }
</style>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
    export default {
        name: 'MainLayout',
        data: function() {
            return {
            }
        },
        components: {
            Header,
            Footer
        }
    }
</script>