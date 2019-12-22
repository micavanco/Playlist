<template>
  <div id="app">
    <transition>
      <Player v-if="this.isPlayerVisible" key="player"></Player>
      <Playlist v-else key="playlist"></Playlist>
    </transition>
  </div>
</template>

<script>
import Playlist from './components/Playlist'
import Player from './components/Player'
import {mapState} from 'vuex'
export default {
  name: 'App',
  components: {Player, Playlist},
  computed: mapState(['isPlayerVisible'])
}
</script>

<style lang="sass">
  @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap')

  body
    margin: 0
    display: flex
    justify-content: center
    align-items: center
    height: 100vh
    background: gainsboro
    font-family: 'Roboto Condensed', sans-serif

  #app
    border: bisque
    background: #737db3
    background: linear-gradient(#737db3, #5b4a82)
    max-height: 540px
    height: 100%
    max-width: 400px
    width: 100%
    box-shadow: 1px 15px 35px -12px rgba(0,0,0,0.75)
    position: relative

  ::-webkit-scrollbar
    width: 10px
  ::-webkit-scrollbar-track
    background: rgba(241, 241, 241, 0)
  ::-webkit-scrollbar-thumb
    background: rgba(136, 136, 136, 0.25)
    border-radius: 4px
  ::-webkit-scrollbar-thumb:hover
    background: rgba(136, 136, 136, 0.5)

  .v-enter-active
    animation: FadeIn 0.3s

  .v-leave-active
    animation: FadeOut 0.3s

  @keyframes FadeIn
    0%
      transform: scale(0.1) translateX(520px)
      opacity: 0
    25%
      transform: scale(0.5) translateX(360px)
      opacity: 0.25
    50%
      transform: scale(0.5) translateX(130px)
      opacity: 0.5
    75%
      transform: scale(0.5) translateX(15px)
      opacity: 0.75
    100%
      transform: scale(1) translateX(0)
      opacity: 1

  @keyframes FadeOut
    0%
      transform: scale(0.1) translateX(0)
      opacity: 1
    25%
      transform: scale(0.5) translateX(-15px)
      opacity: 0.75
    50%
      transform: scale(0.5) translateX(-130px)
      opacity: 0.5
    75%
      transform: scale(0.5) translateX(-360px)
      opacity: 0.15
    100%
      transform: scale(1) translateX(-520px)
      opacity: 0
</style>
