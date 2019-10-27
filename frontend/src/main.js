import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import './assets/css/style.css'
import './assets/bootstrap-4.3.1-dist/css/bootstrap.min.css'
import './assets/jquery.min.js'

Vue.config.productionTip = false
Vue.use(VueRouter)

import BBMain from './components/Main.vue'

const routes = [
    { path: '/', component: BBMain, name: 'main' },
]

const router = new VueRouter({
    routes // short for `routes: routes`
})

new Vue({
    router,
    render(h) {
        return h(App)
    }
}).$mount('#app')