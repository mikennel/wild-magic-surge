<script>
export default {
  name: 'App',
  methods: {
  },
  mounted () {
  },
}
</script>


<template lang='pug'>
  #app
    router-view
</template>

<style lang="sass">
  @import '$vars'
  body
    background-color: $nh-yellow
    margin: 0
    font-family: $font-1
  #app
    position: relative
</style>
