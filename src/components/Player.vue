<template>
  <div class="player">
    <div class="player__top" v-bind:style="{'backgroundImage': 'url('+selectedTrack.image+')'}">
      <div class="player__top__header">

      </div>
      <div class="player__top__bottom">

      </div>
    </div>
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
      background: aliceblue
      width: 320px
      height: 450px
      border-radius: 30px
      overflow: hidden
      &__top
        height: 320px
        width: 320px
        background-size: 100% 100%

</style>
