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

import Echo from 'laravel-echo';

window.Pusher = require('pusher-js');

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: 'local',
    wsHost: '127.0.0.1:6001',
    wsPort: 6001,
    wssPort: 6001,
    disableStats: true,
    encrypted: false,
    enabledTransports: ['ws', 'wss'],

    // // auth: {
    // //     headers: {
    // //         /** I'm using access tokens to access  **/
    // //       Authorization: "Bearer " + localStorage.getItem('token')
    // //     }
    // //   }
});

store.dispatch('auth/attempt', localStorage.getItem('token')).then(()=>{
    createApp(App)
    .component(VueCountdown.name, VueCountdown)
    .use(store)
    .use(router)
    .use(Notifications)
    .mount('#app')
})

import "bootstrap/dist/js/bootstrap.js"