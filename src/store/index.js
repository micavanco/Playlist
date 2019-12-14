import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

const TRACKLIST_URL = '../../static/data.json'

Vue.use(Vuex)
export const store = new Vuex.Store({
  state: {
    tracks: []
  },
  mutations: {
    setTracks (state, tracks) {
      state.tracks = tracks
    }
  },
  actions: {
    async onInit ({commit}) {
      const response = await axios.get(TRACKLIST_URL)
      const tracks = response.data
      console.log(tracks)

      commit('setTracks', tracks)
    }
  }
})
