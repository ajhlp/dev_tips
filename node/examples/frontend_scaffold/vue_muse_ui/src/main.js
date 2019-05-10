import Vue from 'vue';
import Vuex from 'vuex';
import VueCookie from 'vue-cookie';
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
    faCoffee, 
    faEnvelope, 
    faLock, 
    faList, 
    faUser, 
    faUserCog, 
    faUsers, 
    faCogs, 
    faYenSign, 
    faStar,
    faFolder, 
    faChartLine, 
    faFile, 
    faExchangeAlt, 
    faKeyboard, 
    faTicketAlt, 
    faHandshake, 
    faBell,
    faBars, 
    faListOl, 
    faClipboardList, 
    faPhoneVolume, 
    faDatabase, 
    faUserFriends, 
    faChevronUp, 
    faChevronDown, 
    faInfoCircle
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import 'muse-ui/lib/styles/base.less';
import {
    Alert,
    AppBar,
    AutoComplete,
    Avatar,
    Badge,
    BottomNav,
    BottomSheet,
    Breadcrumbs,
    Button,
    Card,
    Carousel,
    Checkbox,
    Chip,
    DateInput,
    DataTable,
    Dialog,
    Divider,
    Drawer,
    ExpansionPanel,
    Form,
    Grid,
    GridList,
    Helpers,
    Icon,
    List,
    LoadMore,
    Menu,
    Pagination,
    Paper,
    Picker,
    Popover,
    Progress,
    Radio,
    Select,
    SlidePicker,
    Slider,
    Snackbar,
    Stepper,
    SubHeader,
    Switch,
    Tabs,
    TextField,
    Tooltip,
    theme
  } from 'muse-ui';
import 'muse-ui/lib/styles/theme.less';
import 'muse-ui-loading/dist/muse-ui-loading.css';
import 'muse-ui-message/dist/muse-ui-message.css';
import Message from 'muse-ui-message';
import Loading from 'muse-ui-loading';

import App from './App.vue';

Vue.use(Vuex);
Vue.use(VueCookie);
Vue.use(VueI18n);
Vue.use(VueRouter);
Vue.use(VueAxios, axios);

Vue.use(Alert);
Vue.use(AppBar);
Vue.use(AutoComplete);
Vue.use(Avatar);
Vue.use(Badge);
Vue.use(BottomNav);
Vue.use(BottomSheet);
Vue.use(Breadcrumbs);
Vue.use(Button);
Vue.use(Card);
Vue.use(Carousel);
Vue.use(Checkbox);
Vue.use(Chip);
Vue.use(DateInput);
Vue.use(DataTable);
Vue.use(Dialog);
Vue.use(Divider);
Vue.use(Drawer);
Vue.use(ExpansionPanel);
Vue.use(Form);
Vue.use(Grid);
Vue.use(GridList);
Vue.use(Helpers);
Vue.use(Icon);
Vue.use(List);
Vue.use(LoadMore);
Vue.use(Menu);
Vue.use(Pagination);
Vue.use(Paper);
Vue.use(Picker);
Vue.use(Popover);
Vue.use(Progress);
Vue.use(Radio);
Vue.use(Select);
Vue.use(SlidePicker);
Vue.use(Slider);
Vue.use(Snackbar);
Vue.use(Stepper);
Vue.use(SubHeader);
Vue.use(Switch);
Vue.use(Tabs);
Vue.use(TextField);
Vue.use(Tooltip);
Vue.use(Message);
Vue.use(Loading);

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
    faCoffee, 
    faEnvelope, 
    faLock, 
    faList, 
    faUser, 
    faUserCog, 
    faUsers, 
    faCogs, 
    faYenSign, 
    faStar,
    faFolder, 
    faChartLine, 
    faFile, 
    faExchangeAlt, 
    faKeyboard, 
    faTicketAlt, 
    faHandshake, 
    faBell,
    faBars, 
    faListOl, 
    faClipboardList, 
    faPhoneVolume, 
    faDatabase, 
    faUserFriends, 
    faChevronUp, 
    faChevronDown, 
    faInfoCircle
);
Vue.component('font-awesome-icon', FontAwesomeIcon);


// config axios
// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    var token = Vue.prototype.$cookie.get(store.state.cookie.userTokenKey);
    if (token) {
        config.headers['Authorization'] = ['Bearer', token].join(' ');
    }

    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
  }, function (error) {
    // Do something with response error
    if (error.response) {
        switch (error.response.status) {
            case 401:
                Vue.prototype.$cookie.delete(store.state.cookie.userTokenKey);

                // 保存当前访问URL
                Vue.prototype.$cookie.set(store.state.cookie.beforeLoginURLKey, router.history.current.path);

                if (Vue.prototype.$cookie.get(store.state.cookie.opsKey) === 'true') {
                    router.push({name: 'opsLoginEntry'});
                } else {
                    router.push({name: 'wechatAuthEntry'});
                }
                break;
            case 403:
                store.dispatch('notify/showMessage', {message: '无权执行该操作', color: 'error'});
                break;
            case 500:
            case 501:
            case 502:
                
                break;
            default:
                
        }
    }
    return Promise.reject(error);
  });

new Vue({
    el: '#app',
    i18n,
    store,
    router,
    render: h => h(App)
});
