<template>
    <div class="audiotrack" v-on:click="onSelectedTrack(data)">
      <div class="audiotrack__header">
        {{data.time}} | {{data.artist}}
      </div>
      <div class="audiotrack__title">
        {{data.title}}
      </div>
      <div class="audiotrack__icons">
        <font-awesome-icon class="audiotrack__icons__share" :icon="['fas', 'share-alt']" />
        <font-awesome-icon class="audiotrack__icons__heart" :icon="['fas', 'heart']" />
      </div>

    </div>
</template>

<script>
import {store} from '../store'

export default {
  name: 'AudioTrack',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  methods: {
    onSelectedTrack: (track) => {
      store.dispatch('onSelectedTrack', track)
    }
  }
}
</script>

<style scoped lang="sass">
  .audiotrack
    position: relative
    width: 245px
    margin: 20px
    height: 50px
    border-bottom: 1px solid #dadada
    transition: all .3s ease-in-out
    cursor: pointer
    padding: 2px
    &:hover
      background: rgba(226, 226, 226, 0.2)
    &:active
      background: rgba(181, 181, 181, 0.5)
    &__header
      font-size: 11px
      color: gray
    &__icons
      position: absolute
      right: 10px
      top: 10px
      cursor: default
      &__share
        color: gray
        cursor: pointer
        transition: all .3s ease-in-out
        &:hover
          color: darkgrey
      &__heart
        color: red
        cursor: pointer
        transition: all .3s ease-in-out
        &:hover
          color: lightcoral

</style>
