<template>
  <div class="playlist">
    <div class="playlist__title">
      <font-awesome-icon class="playlist__title__reply" :icon="['fas', 'reply']" v-on:click="onGoToPlayerClick" />
      <h3>Playlist</h3>
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
  },
  methods: {
    onGoToPlayerClick () {
      store.dispatch('onChangeView', true)
    }
  }
}
</script>

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
      position: absolute
      margin: 40px
      top: 0
      &__title
        color: #63449e
        &__reply
         position: absolute
         padding: 12px
         background: white
         border-radius: 50%
         left: 15px
         top: 10px
         cursor: pointer
      &__list
        width: 290px
        height: 400px
        overflow: auto
        margin-bottom: 50px

</style>
