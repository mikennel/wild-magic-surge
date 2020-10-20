<script>
import firebase from 'firebase'
export default {
  name: 'PublicHome',
  components: {
  },
  data () {
    return {
      hasSurged: false,
      rgb: ["255,255,255,0.5", "255,255,255,0.5", "255,255,255,0.5", "255,255,255,0.5"],
      size: ["100","100","100","100"],
      surgeRoll: null,
      bgRadials: null,
      bgColor: null,
      surgeTable: [],
    }
  },
  methods: {
    surge() {
      this.hasSurged = true
      this.surgeRoll = Math.floor(Math.random() * this.surgeTable.length)
      this.bgColor = `rgba(${this.colorVal()}, ${this.colorVal()}, ${this.colorVal()}, 1)`
      this.rgb.forEach((color, idx) => {
        this.rgb[idx] = `${this.colorVal()}, ${this.colorVal()}, ${this.colorVal()}, 0.5`
        this.size[idx] = `${this.sizeVal()}`
      })
      this.bgRadials = this.setBgRadials()
    },
    colorVal() {
      return Math.floor((Math.random() * 255) +1)
    },
    sizeVal() {
      return Math.floor((Math.random() * 100) +20)
    },
    setBgRadials() {
      let rgb = this.rgb
      let size = this.size
      let returnVal = `radial-gradient(
          circle at top left,
          rgba(${rgb[0]}), 
          transparent ${size[0]}vw
        ),
        radial-gradient(
          circle at top right,
          rgba(${rgb[1]}), 
          transparent ${size[1]}vw
        ),
        radial-gradient(
          at bottom left,
          rgba(${rgb[2]}), 
          transparent ${size[2]}vw
        ),
        radial-gradient(
          at bottom right,
          rgba(${rgb[3]}), 
          transparent ${size[3]}vw
        )`
      return returnVal
    },
    getSurgeTable () {
      this.$firebase.database().ref('/surge_table/').once('value', (ss) => {
        this.surgeTable = ss.val()
      })
    } 
  },
  computed: {
  },
  mounted () {
    this.getSurgeTable()
  }
}
</script>

<template lang="pug">
  .main-container(
    :style='{background: bgRadials, "background-color": bgColor}'
  )
    .grid
      .info
        .text(
          v-if='!hasSurged'
        ) 
          h1 Looks like your wild magic is about to surge...
        .text(
          v-if='hasSurged'
        ) 
          h3 {{surgeRoll+1}}
          p {{surgeTable[surgeRoll]}} 
      .button
        .pro-button.outline(
          @click='surge()'
        ) Surge!
</template>

<style lang="sass" scoped>
  @import '$vars'
  @import '$styles/form.sass'
  .main-container
    transition: .5s
    font-size: 1.3em
    .grid
      grid-template-rows: 80% 20%
      grid-tempalte-columns: 100%
      height: 100%
      width: 100%
      max-height: 40rem
      max-width: 40rem
      margin: auto
      .info
        .text
          padding: 2em 1em
          margin: 2em
          h1, h3
            text-align: center
          p
            text-align: justify
    .text, .pro-button.outline
      border-radius: 1em
      background-color: #ffffff88
    .grid, .info, .button
      display: grid
      justify-content: center
      align-content: center
</style>
