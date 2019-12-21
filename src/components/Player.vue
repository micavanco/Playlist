<template>
  <div class="player">
    <div class="player__top" v-bind:style="{'backgroundImage': 'url('+selectedTrack.image+')'}">
      <div class="player__top__header">

      </div>
      <div class="player__top__bottom">

      </div>
    </div>
    <input class="player__slider"
           type="range"
           min="0"
           v-bind:max="selectedTrack.time.replace(':','')"
           v-on:mousemove="onSliderChange"
           v-on:click="onSliderClick"
           ref="slider"
    >
    <div class="player__audio">

    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {store} from '../store'
export default {
  name: 'Player',
  computed: mapState(['selectedTrack', 'userTimes']),
  methods: {
    onSliderChange (e) {
      const val = (e.target.value / e.target.max) * 100
      e.target.style.background = '-webkit-gradient(linear, left top, right top, ' +
        'color-stop(' + val + '%, white), ' +
        'color-stop(' + val + '%, lightcoral)' +
        ')'
    },
    onSliderClick (e) {
      store.dispatch('onSaveUserTime', {key: this.selectedTrack.key, time: e.target.value})
    }
  },
  updated () {
    const slider = this.$refs.slider
    const currentTime = this.userTimes[this.selectedTrack.key] || 0
    slider.value = currentTime
    const val = (currentTime / slider.max) * 100
    slider.style.background = '-webkit-gradient(linear, left top, right top, ' +
        'color-stop(' + val + '%, white), ' +
        'color-stop(' + val + '%, lightcoral)' +
        ')'
  },
  mounted () {
    const slider = this.$refs.slider
    const val = 0
    this.$refs.slider.value = val
    slider.style.background = '-webkit-gradient(linear, left top, right top, ' +
      'color-stop(' + val + '%, white), ' +
      'color-stop(' + val + '%, lightcoral)' +
      ')'
  }
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
        width: 21px
        height: 21px
        box-shadow: -1px 2px 15px -4px rgba(0,0,0,0.75)
        border-radius: 50%
        background: rgba(255, 255, 255, 0.91) url("../assets/volume-up-solid.svg") no-repeat center
        background-size: 60% 60%
        cursor: pointer
      &__slider::-moz-range-thumb
        width: 21px
        height: 21px
        border-radius: 50%
        background: rgba(255, 255, 255, 0.91) url("../assets/volume-up-solid.svg") no-repeat center
        background-size: 60% 60%
        cursor: pointer
</style>
