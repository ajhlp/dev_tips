import Vue from 'vue';
import Vuex from 'vuex';
import cookie from './modules/cookie';
import user from './modules/user';
import notify from './modules/notify';

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        cookie,
        user,
        notify
    },

    strict: debug
})

export default store