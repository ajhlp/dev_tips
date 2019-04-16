import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        user
    },

    strict: debug
})

export default store