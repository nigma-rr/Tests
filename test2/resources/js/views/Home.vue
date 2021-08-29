<template>
    <div>
        <b-row>
            <b-col>
                <h1 class="text-center p-3">Справочник</h1>
            </b-col>
        </b-row>
        <b-row>
            <b-container class="bv-example-row">
                <b-row class="peoples">
                    <div class="peoples__table-name">
                        <div class="peoples__item-col">
                            <div class="peoples__item-title">ФИО</div>
                        </div>
                        <div class="peoples__item-col">
                            <div class="peoples__item-title">Email</div>
                        </div>
                        <div class="peoples__item-col">
                            <div class="peoples__item-title">Телефон</div>
                        </div>
                    </div>
                    <div class="peoples__list">
                        <div class="peoples__item" :key="index" v-for="(people, index) of tasksList">
                            <div class="peoples__item-col">
                                <div class="peoples__fio">{{people.fio}}</div>
                            </div>
                            <div class="peoples__item-col">
                                <div class="peoples__fio">{{people.email}}</div>
                            </div>
                            <div class="peoples__item-col">
                                <div class="peoples__fio">{{people.phone}}</div>
                            </div>
                        </div>
                    </div>
                </b-row>
            </b-container>
        </b-row>
        <b-row v-if="$store.state.isLoggedIn">
            <b-container>
                <div class="card card-register mx-auto mt-5">
                    <div class="card-header">Добавить запись</div>
                    <div class="card-body">
                        <form v-on:submit.prevent="addPeople">
                            <div class="form-group">
                                <div class="form-row">
                                    <div class="col-md-6 mb-2">
                                        <div class="form-label-group">
                                            <input
                                                type="text"
                                                v-model="people.fio"
                                                id="name"
                                                class="form-control"
                                                placeholder="Введите Фио"
                                                autofocus="autofocus"
                                                required
                                            />
                                            <div class="invalid-feedback d-block" v-if="errors.name">{{errors.name[0]}}</div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-2">
                                        <div class="form-group">
                                            <div class="form-label-group">
                                                <input
                                                    type="email"
                                                    v-model="people.email"
                                                    id="email"
                                                    class="form-control"
                                                    placeholder="Введите email адрес"
                                                    required
                                                />
                                                <div class="invalid-feedback d-block" v-if="errors.email">{{errors.email[0]}}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12 mb-2">
                                        <div class="form-group">
                                            <div class="form-label-group">
                                                <input
                                                    type="tel"
                                                    v-model="people.phone"
                                                    id="email"
                                                    class="form-control"
                                                    placeholder="Введите номер телефона"
                                                    required
                                                />
                                                <div class="invalid-feedback d-block" v-if="errors.email">{{errors.email[0]}}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary btn-block">Добавить</button>
                        </form>
                    </div>
                </div>
            </b-container>
        </b-row>
    </div>
</template>

<style lang="scss">
    .peoples__item, .peoples__table-name {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }

    .peoples__item-col {
        display: grid;
        padding: 15px;
        grid-template-columns: 1fr;
        grid-gap: 10px;
        border: 1px solid;
    }

    .peoples {
        display: flex;
        flex-direction: column;
    }
</style>

<script>
    import * as people from '../services/peoples_service';
    import { mapActions, mapGetters } from 'vuex'
    export default {
        data: function() {
            return {
                people: {
                    name: '',
                    email: '',
                    fio: ''
                },
                errors: {}
            }
        },
        created: function() {
            this.load()
        },
        computed: {
            tasksList() {
                return this.get();
            }
        },
        methods: {
            ...mapActions({
                load: 'loadPeoples'
            }),
            ...mapGetters({
                get: 'getPeoples'
            }),
            addPeople: async function() {
                try {
                    await people.addPeople(this.people, null);
                    this.load()
                    this.error = {};
                } catch (error) {
                    switch (error.response.status) {
                        case 422:
                            this.errors = error.response.data.errors;
                            break;
                        case 500:
                            this.flashMessage.error({
                                message: error.response.data.message,
                                time: 5000
                            });
                            break;
                        default:
                            this.flashMessage.error({
                                message: 'Some error occurred, Please try again!',
                                time: 5000
                            });
                            break;
                    } 
                }
            }
        }
    }
</script>