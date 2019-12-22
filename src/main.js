// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShareAlt, faHeart, faRandom, faRedo, faBars, faStepBackward, faStepForward, faPlay, faReply, faPause } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import axios from 'axios'
import VueAxios from 'vue-axios'

import {store} from './store'

Vue.use(VueAxios, axios)

library.add(faShareAlt)
library.add(faHeart)
library.add(faRandom)
library.add(faRedo)
library.add(faBars)
library.add(faStepForward)
library.add(faStepBackward)
library.add(faPlay)
library.add(faReply)
library.add(faPause)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})
