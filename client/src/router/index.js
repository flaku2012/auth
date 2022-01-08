import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SignIn from '../views/SignIn.vue'
import Register from '../views/Register.vue'
import ResetPassword from '../views/ResetPassword.vue'
import Profile from '../views/profil/Profile.vue'
import Profile_Profil from '../views/profil/Profil.vue'
import Profile_Premium from '../views/profil/Premium.vue'
import Profile_Przyjaciele from '../views/profil/Przyjaciele.vue'
import Profile_Wiadomosci from '../views/profil/Wiadomosci.vue'
import Profile_Zadania from '../views/profil/Zadania.vue'
import Profile_Odznaczenia from '../views/profil/Odznaczenia.vue'
import Profile_Inwentarz from '../views/profil/Inwentarz.vue'
import Dashboard from '../views/Dashboard.vue'
import Miasto from '../views/miasto/Miasto.vue'
import Wystawy from '../views/wystawy/Wystawy.vue'
import Wystawy_Informacje_podstawowe from '../views/wystawy/Informacje_podstawowe.vue'
import Bazar from '../views/bazar/Bazar.vue'
import Bazar_Lista_ofert from '../views/bazar/Lista_ofert.vue'
import Bazar_Moje_oferty from '../views/bazar/Moje_oferty.vue'
import Bazar_Szczegoly_oferty from '../views/bazar/Szczegoly_oferty.vue'
import Sekcja from '../views/sekcja/Sekcja.vue'
import Sekcja_Informacje_podstawowe from '../views/sekcja/Informacje_podstawowe.vue'
import Sekcja_Lista_sekcji from '../views/sekcja/Lista_sekcji.vue'
import Sekcja_Nowa_sekcja from '../views/sekcja/Nowa_sekcja.vue'
import Sekcja_Szczegoly_sekcji from '../views/sekcja/Szczegoly_sekcji.vue'
import Sekcja_Zarzadzanie_sekcja from '../views/sekcja/Zarzadzanie_sekcja.vue'
import Magazyn from '../views/magazyn/Magazyn.vue'
import Praca from '../views/praca/Praca.vue'
import Sklep from '../views/sklep/Sklep.vue'
import Sklep_Pasze from '../views/sklep/Pasze.vue'
import Sklep_Lekarstwa from '../views/sklep/Lekarstwa.vue'
import Sklep_Gryt from '../views/sklep/Gryt.vue'
import Sklep_Obraczki from '../views/sklep/Obraczki.vue'
import Sklep_Tipesy from '../views/sklep/Tipesy.vue'
import Sklep_Budowlanka from '../views/sklep/Budowlanka.vue'
import Sklep_Narzedzia from '../views/sklep/Narzedzia.vue'
import Zwiazek from '../views/zwiazek/Zwiazek.vue'
import Zwiazek_Informacje_podstawowe from '../views/zwiazek/Informacje_podstawowe.vue'
import Zwiazek_Lista_golebi_doroslych from '../views/zwiazek/Lista_golebi_doroslych.vue'
import Zwiazek_Lista_golebi_mlodych from '../views/zwiazek/Lista_golebi_mlodych.vue'
import Zwiazek_Najblizsze_loty from '../views/zwiazek/Najblizsze_loty.vue'
import Zwiazek_Ostatnie_loty from '../views/zwiazek/Ostatnie_loty.vue'
import Zwiazek_Ranking_golebi from '../views/zwiazek/Ranking_golebi.vue'
import Zwiazek_Ranking_hodowcow from '../views/zwiazek/Ranking_hodowcow.vue'
import Zwiazek_Zmiana_oddzialu from '../views/zwiazek/Zmiana_oddzialu.vue'
import NotFound from '../views/NotFound.vue'
import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/resetpassword',
    name: 'ResetPassword',
    component: ResetPassword
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    children: [
      {
        path: 'profil',
        component: Profile_Profil
      },
      {
        path: 'premium',
        component: Profile_Premium
      },
      {
        path: 'przyjaciele',
        component: Profile_Przyjaciele
      },
      {
        path: 'wiadomosci',
        component: Profile_Wiadomosci
      },
      {
        path: 'zadania',
        component: Profile_Zadania
      },
      {
        path: 'odznaczenia',
        component: Profile_Odznaczenia
      },
      {
        path: 'inwentarz',
        component: Profile_Inwentarz
      },
    ],
    beforeEnter: (to, from, next) => {
      if(!store.getters['auth/authenticated']){
        return next({
          name: 'SignIn'
        })
      }
      next()
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      if(!store.getters['auth/authenticated']){
        return next({
          name: 'SignIn'
        })
      }
      next()
    }
  },
  {
    path: '/miasto',
    name: 'Miasto',
    component: Miasto,
    beforeEnter: (to, from, next) => {
      if(!store.getters['auth/authenticated']){
        return next({
          name: 'SignIn'
        })
      }
      next()
    }
  },
  {
    path: '/wystawy',
    name: 'Wystawy',
    component: Wystawy,
    children: [
      {
        path: 'informacje_podstawowe',
        component: Wystawy_Informacje_podstawowe
      },
    ],
    beforeEnter: (to, from, next) => {
      if(!store.getters['auth/authenticated']){
        return next({
          name: 'SignIn'
        })
      }
      next()
    }
  },
  {
    path: '/bazar',
    name: 'Bazar',
    component: Bazar,
    children: [
      {
        path: 'lista_ofert',
        component: Bazar_Lista_ofert
      },
      {
        path: 'moje_oferty',
        component: Bazar_Moje_oferty
      },
      {
        path: 'szczegoly_oferty',
        component: Bazar_Szczegoly_oferty
      },
    ],
    beforeEnter: (to, from, next) => {
      if(!store.getters['auth/authenticated']){
        return next({
          name: 'SignIn'
        })
      }
      next()
    }
  },
  {
    path: '/sekcja',
    name: 'Sekcja',
    component: Sekcja,
    children: [
      {
        path: 'informacje_podstawowe',
        component: Sekcja_Informacje_podstawowe
      },
      {
        path: 'lista_sekcji',
        component: Sekcja_Lista_sekcji
      },
      {
        path: 'nowa_sekcja',
        component: Sekcja_Nowa_sekcja
      },
      {
        path: 'szczegoly_sekcji',
        component: Sekcja_Szczegoly_sekcji
      },
      {
        path: 'zarzadzanie_sekcja',
        component: Sekcja_Zarzadzanie_sekcja
      },
    ],
    beforeEnter: (to, from, next) => {
      if(!store.getters['auth/authenticated']){
        return next({
          name: 'SignIn'
        })
      }
      next()
    }
  },
  {
    path: '/magazyn',
    name: 'Magazyn',
    component: Magazyn,
    beforeEnter: (to, from, next) => {
      if(!store.getters['auth/authenticated']){
        return next({
          name: 'SignIn'
        })
      }
      next()
    }
  },
  {
    path: '/praca',
    name: 'Praca',
    component: Praca,
    beforeEnter: (to, from, next) => {
      if(!store.getters['auth/authenticated']){
        return next({
          name: 'SignIn'
        })
      }
      next()
    }
  },
  {
    path: '/sklep',
    name: 'Sklep',
    component: Sklep,
    children: [
      {
        path: 'pasze',
        component: Sklep_Pasze
      },
      {
        path: 'lekarstwa',
        component: Sklep_Lekarstwa
      },
      {
        path: 'gryt',
        component: Sklep_Gryt
      },
      {
        path: 'obraczki',
        component: Sklep_Obraczki
      },
      {
        path: 'tipesy',
        component: Sklep_Tipesy
      },
      {
        path: 'budowlanka',
        component: Sklep_Budowlanka
      },
      {
        path: 'narzedzia',
        component: Sklep_Narzedzia
      },
    ],
    beforeEnter: (to, from, next) => {
      if(!store.getters['auth/authenticated']){
        return next({
          name: 'SignIn'
        })
      }
      next()
    }
  },
  {
    path: '/zwiazek',
    name: 'Zwiazek',
    component: Zwiazek,
    children: [
      {
        path: 'informacje_podstawowe',
        component: Zwiazek_Informacje_podstawowe
      },
      {
        path: 'lista_golebi_doroslych',
        component: Zwiazek_Lista_golebi_doroslych
      },
      {
        path: 'lista_golebi_mlodych',
        component: Zwiazek_Lista_golebi_mlodych
      },
      {
        path: 'najblizsze_loty',
        component: Zwiazek_Najblizsze_loty
      },
      {
        path: 'ostatnie_loty',
        component: Zwiazek_Ostatnie_loty
      },
      {
        path: 'ranking_golebi',
        component: Zwiazek_Ranking_golebi
      },
      {
        path: 'ranking_hodowcow',
        component: Zwiazek_Ranking_hodowcow
      },
      {
        path: 'zmiana_oddzialu',
        component: Zwiazek_Zmiana_oddzialu
      },
    ],
    beforeEnter: (to, from, next) => {
      if(!store.getters['auth/authenticated']){
        return next({
          name: 'SignIn'
        })
      }
      next()
    }
  },
  {
    path: "/:NotFound(.*)",
    name: "NotFound",
    component: NotFound,
},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
