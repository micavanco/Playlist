<template>
  <div class="player">
    <div class="player__top" v-bind:style="{'backgroundImage': 'url('+selectedTrack.image+')'}">
      <div class="player__top__header">

      </div>
      <div class="player__top__bottom">

      </div>
    </div>
    <input class="player__slider" type="range" min="0" max="500" value="selectedTrack.time">
    <div class="player__audio">

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
      position: relative
      &__top
        height: 320px
        width: 320px
        background-size: 100% 100%
        &__header
          width: 100%
          height: 80px
          background: rgba(87, 83, 117, 0.62)
        &__bottom
          width: 100%
          height: 80px
          background: rgba(87, 83, 117, 0.62)
          margin-top: 160px
      &__slider
        position: absolute
        top: 318px
        -webkit-appearance: none
        width: 318px
        height: 7px
        background: white
        outline: none
        -webkit-transition: .2s
        transition: opacity .2s
      &__slider::-webkit-slider-thumb
        -webkit-appearance: none
        appearance: none
        width: 20px
        height: 20px
        border-radius: 50%
        background: rgba(255, 255, 255, 0.91) url("../assets/volume-up-solid.svg") no-repeat center
        background-size: 60% 60%
        cursor: pointer
      &__slider::-moz-range-thumb
        width: 25px
        height: 25px
        border-radius: 50%
        background: #4CAF50
        cursor: pointer
</style>
