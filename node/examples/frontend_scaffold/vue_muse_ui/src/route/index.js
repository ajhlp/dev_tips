import Vue from 'vue';
import VueRouter from 'vue-router';
//引入nprogress进度条
import NProgress from 'nprogress';
//引入nprogress进度条的样式
import 'nprogress/nprogress.css';
import store from '../store';

NProgress.configure({ showSpinner: false });

const NotFoundComponent = () => import(/* webpackChunkName: "notfoundentry" */ '../components/NotFoundComponent.vue');
const DefaultEntryComponent = () => import(/* webpackChunkName: "defaultentry" */ '../components/DefaultEntryComponent.vue');
const HelloWorldComponent = () => import(/* webpackChunkName: "helloworld" */ '../components/HelloWorldComponent.vue');


// OPS
const OPSDefaultEntryComponent = () => import(/* webpackChunkName: "opsdefaultentry" */ '../components/ops/DefaultEntryComponent.vue');
const OPSIndexComponent = () => import(/* webpackChunkName: "opsindex" */ '../components/ops/IndexComponent.vue');
const OPSLoginComponent = () => import(/* webpackChunkName: "opslogin" */ '../components/ops/LoginComponent.vue');

const OPSCustomersComponent = () => import(/* webpackChunkName: "opslogin" */ '../components/ops/customers/CustomersComponent.vue');

// Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
    {
        path: '/',
        name: 'defaultEntry',
        component: DefaultEntryComponent
    },
    { 
        path: '/hello', 
        name: 'helloEntry',
        component: HelloWorldComponent
    },
    {
        path: '/ops',
        component: OPSDefaultEntryComponent,
        children: [{
            path: 'login',
            name: 'opsLoginEntry',
            component: OPSLoginComponent,
            meta: { navTitle: '登录' }
        }, {
            path: 'customers',
            name: 'opsCustomersListEntry',
            component: OPSIndexComponent,
            children: [{
                path: 'list',
                component: OPSCustomersComponent,
                meta: { requiresAuth: true, navTitle: '用户查询' }
            }]
        }, {
            path: '',
            name: 'opsDefaultEntry',
            component: OPSIndexComponent,
            meta: { requiresAuth: true, navTitle: '首页' }
        }]
    },
    { 
        path: '*', 
        component: NotFoundComponent 
    }
]


// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
})

router.beforeEach((to, from, next) => {
    if(to.meta.requiresAuth && 
        !Vue.prototype.$cookie.get(store.state.cookie.userTokenKey) &&
        to.path != '/ops/login'){
        // 第一次进入项目
        Vue.prototype.$cookie.set(store.state.cookie.beforeLoginURLKey, to.fullPath) // 保存用户进入的url
        
        next('/ops/login');

        return false
    }

    NProgress.start();   
    next();
});

router.afterEach((to, from) => {
    //	关闭进度条
	NProgress.done();
})

export default router
