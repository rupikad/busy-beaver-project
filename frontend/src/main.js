import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import './assets/css/style.css'
import './assets/bootstrap-4.3.1-dist/css/bootstrap.min.css'
import 'material-icons'
//import './assets/jquery.min.js'

Vue.config.productionTip = false
Vue.use(VueRouter)

import BBMain from './components/Main.vue'
import BBMap from './components/Map.vue'
import BBEventForm from './components/AddEventForm.vue'
import BBNewFeature from './components/new_feature.vue'
import BBPageNotFound from './components/page_not_found.vue'

const routes = [
    { path: '/', component: BBMain, name: 'main' },
    { path: '/map', component: BBMap, name: 'map' },
    { path: '/eventform', component: BBEventForm, name: 'eventform' },
    { path: '/newfeature', component: BBNewFeature, name: 'newfeature'},
    { path: '*', component: BBPageNotFound, name: 'pagenotfound'}
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