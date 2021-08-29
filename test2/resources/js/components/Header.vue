<template>
    <div>
        <b-navbar class="header__nav" toggleable="lg"  type="dark" variant="info">
            <div class="container">
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" class="header__menu" is-nav>
                <b-navbar-nav class="header__menu-list">
                    <b-nav-item to=/>Главная</b-nav-item>
                    <b-nav-item to=/register>Регистрация</b-nav-item>
                    <b-nav-item to=/login>Вход</b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto" v-if="$store.state.isLoggedIn">
                    <b-nav-item-dropdown right>
                    <template #button-content>
                        <em>{{$store.state.profile.name}}</em>
                    </template>
                    <b-dropdown-item v-on:click="logout">Выйти</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
                </b-collapse>
            </div>
        </b-navbar>
    </div>
</template>

<style>
    .header__nav {
        background-color: #6fa7a1;
        box-shadow: 0px 4px 20px rgb(0 0 0 / 9%);
        position: relative;
        z-index: 3;
        padding: 8px 0;
    }

    .header__menu-list {
        width: 100%;
    }

    .header__menu-list .nav-item a {
        color: #fff;
    }
</style>

<script>
    import * as auth from '../services/auth_service';
    export default {
        data: function() {
            return {
                isLoggedIn: auth.isLoggedIn()
            }
        },
        created: async function() {
            try {
                if (auth.isLoggedIn()) {
                    const response = await auth.getProfile();
                    this.$store.dispatch('authenticate', response.data);
                }
            } catch (error) {
                auth.logout();
            }
        },
        methods: {
            logout: async function() {
                auth.logout();
                this.$store.dispatch('tasksSet', {});
                this.$store.dispatch('authenticate', {});
                this.$router.push('/login');
            }
        }
    }
</script>
