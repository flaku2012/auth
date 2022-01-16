import "bootstrap/dist/css/bootstrap.css"

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Notifications from '@kyvg/vue3-notification'

require('@/store/subscriber')

axios.defaults.baseURL = 'http://127.0.0.1:8000/api'


store.dispatch('auth/attempt', localStorage.getItem('token')).then(()=>{
    createApp(App)
    .use(store)
    .use(router)
    .use(Notifications)
    .mount('#app')
})

import "bootstrap/dist/js/bootstrap.js"