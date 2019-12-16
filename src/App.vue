<template>
  <div id="app">
    <Player></Player>
    <Playlist></Playlist>
  </div>
</template>

<script>
import Playlist from './components/Playlist'
import Player from './components/Player'
export default {
  name: 'App',
  components: {Player, Playlist}
}
</script>

<style lang="sass">
  body
    margin: 0
    display: flex
    justify-content: center
    align-items: center
    height: 100vh
    background: gainsboro

  #app
    display: flex
    justify-content: space-around
    align-items: center
    border: bisque
    background: #737db3
    background: linear-gradient(#737db3, #9198e5)
    max-height: 540px
    height: 100%
    max-width: 790px
    width: 100%
    flex-wrap: wrap
    box-shadow: 1px 15px 35px -12px rgba(0,0,0,0.75)

  ::-webkit-scrollbar
    width: 10px
  ::-webkit-scrollbar-track
    background: rgba(241, 241, 241, 0)
  ::-webkit-scrollbar-thumb
    background: rgba(136, 136, 136, 0.25)
    border-radius: 4px
  ::-webkit-scrollbar-thumb:hover
    background: rgba(136, 136, 136, 0.5)
</style>
