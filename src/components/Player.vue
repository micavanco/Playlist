<template>
  <div class="player">
    <div class="player__top" v-bind:style="{'backgroundImage': 'url('+selectedTrack.image+')'}">
      <div class="player__top__header">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="repeat" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-repeat fa-w-16 fa-1x"><path fill="currentColor" d="M512 256c0 88.224-71.775 160-160 160H170.067l34.512 32.419c9.875 9.276 10.119 24.883.539 34.464l-10.775 10.775c-9.373 9.372-24.568 9.372-33.941 0l-92.686-92.686c-9.373-9.373-9.373-24.568 0-33.941l92.686-92.686c9.373-9.373 24.568-9.373 33.941 0l10.775 10.775c9.581 9.581 9.337 25.187-.539 34.464L170.067 352H352c52.935 0 96-43.065 96-96 0-13.958-2.996-27.228-8.376-39.204-4.061-9.039-2.284-19.626 4.723-26.633l12.183-12.183c11.499-11.499 30.965-8.526 38.312 5.982C505.814 205.624 512 230.103 512 256zM72.376 295.204C66.996 283.228 64 269.958 64 256c0-52.935 43.065-96 96-96h181.933l-34.512 32.419c-9.875 9.276-10.119 24.883-.539 34.464l10.775 10.775c9.373 9.372 24.568 9.372 33.941 0l92.686-92.686c9.373-9.373 9.373-24.568 0-33.941l-92.686-92.686c-9.373-9.373-24.568-9.373-33.941 0L306.882 29.12c-9.581 9.581-9.337 25.187.539 34.464L341.933 96H160C71.775 96 0 167.776 0 256c0 25.897 6.186 50.376 17.157 72.039 7.347 14.508 26.813 17.481 38.312 5.982l12.183-12.183c7.008-7.008 8.786-17.595 4.724-26.634z" class="player__top__header__icon"></path></svg>
        <font-awesome-icon class="player__top__header__icon" :icon="['fa', 'random']" />
        <font-awesome-icon class="player__top__header__icon" :icon="['fa', 'redo']" />
        <font-awesome-icon class="player__top__header__hamburger" :icon="['fa', 'bars']" v-on:click="onGoToPlayListClick" />
      </div>
      <div class="player__top__bottom">
        <h3>{{selectedTrack.artist}}</h3>
        <h5>{{selectedTrack.title}}</h5>
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
      <font-awesome-icon class="player__audio__share" :icon="['fas', 'share-alt']" />
      <font-awesome-icon class="player__audio__step-backward" :icon="['fas', 'step-backward']" v-on:click="onChangeSong(false)" />
      <transition name="fade">
        <font-awesome-icon class="player__audio__play" :icon="['fas', 'play']" v-on:click="onPlaySong" v-if="!this.isPlaying"/>
        <font-awesome-icon class="player__audio__play" :icon="['fas', 'pause']" v-on:click="onPlaySong" v-else/>
      </transition>
      <font-awesome-icon class="player__audio__step-forward" :icon="['fas', 'step-forward']" v-on:click="onChangeSong(true)" />
      <font-awesome-icon class="player__audio__heart" :icon="['fas', 'heart']" />
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {store} from '../store'
export default {
  name: 'Player',
  computed: mapState(['selectedTrack', 'userTimes']),
  data: () => {
    return {
      isPlaying: false
    }
  },
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
    },
    onGoToPlayListClick () {
      store.dispatch('onChangeView', false)
    },
    onPlaySong () {
      this.isPlaying = !this.isPlaying
    },
    onChangeSong (isNext) {
      store.dispatch('onGoToSong', {key: this.selectedTrack.key, isNext})
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
    const currentTime = this.userTimes[this.selectedTrack.key] || 0
    slider.value = currentTime
    const val = (currentTime / slider.max) * 100
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
      margin: 40px
      display: inline-block
      &__top
        height: 320px
        width: 320px
        background-size: 100% 100%
        &__header
          display: flex
          flex-direction: row
          justify-content: center
          align-items: center
          width: 100%
          height: 80px
          background: rgba(87, 83, 117, 0.62)
          &__icon
            margin-left: 20px
            color: white
            transition: all 0.3s ease-in-out
            cursor: pointer
            &:hover
              color: #b1b9c0
          &__hamburger
            position: absolute
            right: 25px
            color: gray
            transition: all 0.3s ease-in-out
            cursor: pointer
            &:hover
              color: aliceblue
        &__bottom
          width: 100%
          height: 80px
          color: white
          display: flex
          flex-direction: column
          justify-content: center
          align-items: center
          background: rgba(87, 83, 117, 0.62)
          margin-top: 160px
          h3
            margin: 0
          h5
            margin: 5px 0 0 0
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
        z-index: 9
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
        z-index: 10
      &__slider::-moz-range-thumb
        width: 21px
        height: 21px
        border-radius: 50%
        background: rgba(255, 255, 255, 0.91) url("../assets/volume-up-solid.svg") no-repeat center
        background-size: 60% 60%
        cursor: pointer
      &__slider::-ms-thumb
        width: 21px
        height: 21px
        border-radius: 50%
        background: rgba(255, 255, 255, 0.91) url("../assets/volume-up-solid.svg") no-repeat center
        background-size: 60% 60%
        cursor: pointer
      &__audio
        display: flex
        flex-direction: row
        justify-content: center
        align-items: center
        height: 137px
        position: relative
        &__share
          background: white
          position: absolute
          left: 20px
          padding: 10px
          border-radius: 50%
          cursor: pointer
        &__step-backward
          background: #737db3
          position: absolute
          padding: 12px 14px
          border-radius: 50%
          left: 87px
          color: white
          cursor: pointer
          transition: all 0.3s ease-in-out
          &:hover
            color: #ffb6f0
          &:active
            color: #737db3
        &__play
          background: #737db3
          position: absolute
          padding: 16px 18px
          border-radius: 50%
          left: 136px
          top: 40px
          color: white
          cursor: pointer
          transition: all 0.3s ease-in-out
          &:hover
            color: #f4f4f4
          &:active
            color: #737db3
        &__step-forward
          background: #737db3
          position: absolute
          padding: 12px 14px
          border-radius: 50%
          right: 85px
          color: white
          cursor: pointer
          transition: all 0.3s ease-in-out
          &:hover
            color: #ffb6f0
          &:active
            color: #737db3
        &__heart
          background: white
          position: absolute
          padding: 12px 14px
          border-radius: 50%
          right: 20px
          color: red
          cursor: pointer
  .v-enter-active, .v-leave-active
    animation: ease-in-out 1s FadeOutIcon
  @keyframes FadeOutIcon
    from
      opacity: 0
    to
      opacity: 1

</style>
