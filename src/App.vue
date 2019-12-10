<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="sass">
  body
    margin: 0
    display: flex
    justify-content: center
    align-items: center
    height: 100vh

  #app
    display: flex
    justify-content: center
    align-items: center
    border: bisque
    background: aqua
    max-height: 540px
    height: 100%
    max-width: 1200px
    width: 100%

</style>
