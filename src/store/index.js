import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

const TRACKLIST_URL = '../../static/data.json'

Vue.use(Vuex)
export const store = new Vuex.Store({
  state: {
    tracks: [],
    selectedTrack: {
      artist: 'Icona Pop',
      favorite: true,
      image: 'https://i.ytimg.com/vi/3TDHRSjR0s0/maxresdefault.jpg',
      time: '2:35',
      title: "Still Don't Know",
      key: 1
    },
    userTimes: {}
  },
  mutations: {
    setTracks (state, tracks) {
      state.tracks = tracks
    },
    setSelectedTrack (state, track) {
      state.selectedTrack = track
    },
    setUserTime (state, data) {
      state.userTimes[data.key] = data.time
    }
  },
  actions: {
    async onInit ({commit}) {
      const response = await axios.get(TRACKLIST_URL)
      const tracks = response.data

      commit('setTracks', tracks)
    },
    onSelectedTrack ({commit}, track) {
      commit('setSelectedTrack', track)
    },
    onSaveUserTime ({commit}, data) {
      commit('setUserTime', data)
    }
  }
})
