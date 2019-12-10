<template>
  <div class="playlist">
    <AudioTrack></AudioTrack>
    {{tracklist$}}
  </div>
</template>

<script>
import AudioTrack from './AudioTrack'
import {tracklistService} from '../services/tracklist.service'
export default {
  name: 'Playlist',
  components: {AudioTrack},
  titles: ['Still Don\'t Know', 'I Love It', 'Girlfriend'],
  subscriptions () {
    const tracklist$ = tracklistService.getData()
    return {tracklist$}
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
