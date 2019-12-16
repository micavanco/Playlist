<template>
  <div class="player">
    <h1 v-if="selectedTrack">{{selectedTrack.title}}</h1>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'Player',
  computed: mapState(['selectedTrack'])
}
</script>

<style scoped lang="sass">
  .player
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      background: aliceblue
      width: 320px
      height: 450px
      border-radius: 30px
</style>
