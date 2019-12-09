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
import BBEventForm from './components/AddEvent.vue'
import BBNewFeature from './components/new_feature.vue'
import BBPageNotFound from './components/page_not_found.vue'
import BBEvents from './components/Events.vue'
import BBDashboard from './components/Dashboard.vue'
import BBStopEta from './components/DisplayStopswTimes.vue'

const routes = [
    { path: '/', component: BBMain, name: 'main' },
    { path: '/dashboard', component: BBDashboard, name: 'dashboard' },
    { path: '/map', component: BBMap, name: 'map' },
    { path: '/eventform', component: BBEventForm, name: 'eventform' },
    { path: '/newfeature', component: BBNewFeature, name: 'newfeature' },
    { path: '*', component: BBPageNotFound, name: 'pagenotfound' },
    { path: '/events', component: BBEvents, name: 'events' },
    { path: '/eta', component: BBStopEta, name: 'eta'}
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