import "bootstrap/dist/css/bootstrap.css"

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Notifications from '@kyvg/vue3-notification'
import VueCountdown from '@chenfengyuan/vue-countdown';

require('@/store/subscriber')

// dokonać zmiany przy przesłaniu na serwer produkcyjny
// wg. az.pl - http://www.gra-golebie.pl/api/public/api/
// localhost : http://127.0.0.1:8000/api
axios.defaults.baseURL = 'http://127.0.0.1:8000/api'


store.dispatch('auth/attempt', localStorage.getItem('token')).then(()=>{
    createApp(App)
    .component(VueCountdown.name, VueCountdown)
    .use(store)
    .use(router)
    .use(Notifications)
    .mount('#app')
})

import "bootstrap/dist/js/bootstrap.js"