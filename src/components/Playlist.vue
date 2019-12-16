<template>
  <div class="playlist">
    <div class="playlist__title">
      <h2>Playlist</h2>
    </div>
    <div class="playlist__list">
      <AudioTrack v-for="track in tracks" v-bind:data="track" v-bind:key="track.key"></AudioTrack>
    </div>
  </div>
</template>

<script>
import AudioTrack from './AudioTrack'
import {mapState} from 'vuex'
import {store} from '../store'
export default {
  name: 'Playlist',
  components: {AudioTrack},
  computed: mapState(['tracks']),
  created: () => {
    store.dispatch('onInit')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  .playlist
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      background: aliceblue
      width: 320px
      height: 450px
      border-radius: 30px

      &__title
        color: #63449e
      &__list
        width: 290px
        height: 400px
        overflow: auto
        margin-bottom: 50px


</style>
