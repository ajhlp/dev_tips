import VueRouter from 'vue-router';
//引入nprogress进度条
import NProgress from 'nprogress';
//引入nprogress进度条的样式
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false });

const DefaultEntryComponent = () => import(/* webpackChunkName: "defaultentry" */ '../components/DefaultEntryComponent.vue');
const HelloWorldComponent = () => import(/* webpackChunkName: "helloworld" */ '../components/HelloWorldComponent.vue');

// Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
    {
        path: '/',
        component: DefaultEntryComponent
    },
    { 
        path: '/hello', 
        component: HelloWorldComponent
    }
]


// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
    routes // short for `routes: routes`
})

router.beforeEach((to, from, next) => {
    NProgress.start();   
    next();
});

router.afterEach((to, from) => {
    //	关闭进度条
	NProgress.done();
})

export default router
