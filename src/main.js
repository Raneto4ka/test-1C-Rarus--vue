import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

import './scss/style.scss'

Vue.use(VueAxios, axios);

new Vue({
  el: '#app',
  render: h => h(App)
})
