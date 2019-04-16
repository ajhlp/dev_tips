import Vue from 'vue';
import Vuex from 'vuex';
import VueI18n from 'vue-i18n';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import 'es6-promise/auto';

import zhLocale from './locale/lang/zh-CN';
import enLocale from './locale/lang/en';

import store from './store';
import router from './route';

import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faCoffee, faEnvelope, faLock, faUser, faUserCog, faList, faUsers, faCogs, faYenSign, faStar,
    faFolder, faChartLine, faFile, faExchangeAlt, faKeyboard, faTicketAlt, faHandshake, faBell, 
    faBars, faListOl, faClipboardList, faPhoneVolume, faDatabase
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import 'muse-ui/lib/styles/base.less';
import { Button, Select } from 'muse-ui';
import 'muse-ui/lib/styles/theme.less';

import App from './App.vue';

Vue.use(Vuex);
Vue.use(VueI18n);
Vue.use(VueRouter);
Vue.use(VueAxios, axios);

Vue.use(Button);
Vue.use(Select);

const messages = {
    en: { message: enLocale },
    zh: { message: zhLocale }
};

// Create VueI18n instance with options
const i18n = new VueI18n({
    locale: 'zh', // set locale
    messages, // set locale messages
});

// font awesome icons
library.add(
    faCoffee, faEnvelope, faLock, faList, faUser, faUserCog, faUsers, faCogs, faYenSign, faStar,
    faFolder, faChartLine, faFile, faExchangeAlt, faKeyboard, faTicketAlt, faHandshake, faBell,
    faBars, faListOl, faClipboardList, faPhoneVolume, faDatabase
);
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
    el: '#app',
    i18n,
    store,
    router,
    render: h => h(App)
});
