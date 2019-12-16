<template>
  <div class="playlist">
    <AudioTrack v-for="track in tracks" v-bind:data="track"></AudioTrack>
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
</style>
