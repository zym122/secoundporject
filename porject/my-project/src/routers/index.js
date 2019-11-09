import Vue from 'vue'
// import VueRouter from '../assets/vue-router'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '../pages/Home.vue'
import Brand from '../pages/Brand.vue'
import Goodscar from '../pages/Goodscar.vue'
import Mine from '../pages/Mine.vue'
import Discounts from '../pages/Discounts.vue'
import Detail from '../pages/Detail.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'



const routes = [{
        // 当页面为http://localhost:8080/home 在<router-view>加载Home组件
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/',
        redirect: '/home'
    },
    {
        // 当页面为http://localhost:8080/recover 在<router-view>加载Recover组件
        path: '/brand',
        name: 'brand',
        component: Brand
    },
    {
        path: '/goodscar',
        name: 'goodscar',
        component: Goodscar
    },
    {
        path: '/mine',
        name: 'mine',
        component: Mine
    },
    {
        path: '/discounts',
        name: 'discounts',
        component: Discounts
    },
    {
        path: '/detail',
        name: 'detail',
        component: Detail
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    
    
   
]
const router = new VueRouter({
    routes
})
export default router