<template>
    <div class="audiotrack">
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
export default {
  name: 'AudioTrack',
  props: ['data']
}
</script>

<style scoped lang="sass">
  .audiotrack
    position: relative
    width: 280px
    margin: 20px
    height: 50px
    border-bottom: 1px solid #dadada
    &__header
      font-size: 11px
      color: gray
    &__icons
      position: absolute
      right: 10px
      top: 10px
      &__share
        color: gray
      &__heart
        color: red

</style>
