import Vue from 'vue';
import Vuex from 'vuex';
import * as auth from '../services/auth_service';
import axios from 'axios';
import {http, httpFile} from '../services/http_service';

const loadPeoples = () => {
    return http().get('/peoples');
}

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isLoggedIn: null,
        apiURL: 'http://service.ru/api/',
        serverPath: 'http://service.ru/',
        profile: {},
        tasksObj: {},
        peoples: []
    },
    mutations: {
        authenticate(state, payload) {
            state.isLoggedIn = auth.isLoggedIn();
            if (state.isLoggedIn) {
                state.profile = payload;
            } else {
                state.profile = {};
            }
        },
        SET_PEOPLES(state, payload) {
            state.peoples = payload
        }
    },
    actions: {
        authenticate(context, payload) {
            context.commit('authenticate', payload);
        },
        async loadPeoples({ commit }, payload) {
            try {
                const peoples = await loadPeoples()
                commit('SET_PEOPLES', peoples.data)
            } catch (error) {
                console.error(error)
            }
        }
    },
    getters: {
        getPeoples(state) {
            return state.peoples
        }
    }
})