// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import Rx from 'rxjs'
import VueRx from 'vue-rx'

import axios from 'axios'
import VueAxios from 'vue-axios'

import {store} from './store'

Vue.use(VueRx, Rx)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})
