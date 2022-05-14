<script>
import firebase from 'firebase'
export default {
  name: 'PublicHome',
  components: {
  },
  data () {
    return {
      hasSurged: false,
      positions: ["circle at top left","circle at top right","at bottom left","at bottom right"],
      surgeRoll: [],
      bgRadials: null,
      bgColor: null,
      surgeTable: [],
      numSurges: 0,
      displaySurge: 0,
    }
  },
  methods: {
    surge() {
      this.hasSurged = true
      for (let i = 0; i < this.numSurges; i++) {
        this.surgeRoll[i] = Math.floor(Math.random() * this.surgeTable.length)
      }
      this.bgColor = `rgba(${this.colorVal()}, ${this.colorVal()}, ${this.colorVal()}, 1)`
      this.bgRadials = this.setBgRadials()
    },
    setSurges(numSurges) {
      this.numSurges = numSurges
      this.surge()
    },
    colorVal() {
      return Math.floor((Math.random() * 255) +1)
    },
    rgbVal() {
      return `${this.colorVal()}, ${this.colorVal()}, ${this.colorVal()}, ${Math.floor((Math.random() * 50) +25)}`
    },
    sizeVal() {
      return Math.floor((Math.random() * 100) + 40)
    },
    setBgRadials() {
      let returnVal = ""
      this.positions.forEach((position,idx) => {
        returnVal += `radial-gradient(
          ${position},
          rgba(${this.rgbVal()}), 
          transparent ${this.sizeVal()}vw
        )${idx < this.positions.length-1 ? "," : ""}`
      })
      return returnVal
    },
    getSurgeTable () {
      this.$firebase.database().ref('/surge_table/').once('value', (ss) => {
        this.surgeTable = ss.val()
        console.log('table size', this.surgeTable.length)
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
          h3(
            v-if='numSurges === 1'
          ) {{surgeRoll[displaySurge]+1}}
          .surge-options(
            v-if='numSurges === 2'
          )
            .pro-button.surge-option(
              v-for='(option,idx) in surgeRoll'
              @click='displaySurge = idx'
              :class='{selected: displaySurge === idx}'
            ) {{surgeRoll[idx]+1}}
          p {{surgeTable[surgeRoll[displaySurge]]}} 
      .button.options(
        v-if='!hasSurged'
      )
        .pro-button.outline(
          @click='setSurges(1)'
        ) Surge Once!
        .pro-button.outline(
          @click='setSurges(2)'
        ) Surge Twice!
      .button(
        v-if='hasSurged'
      )
        .pro-button(
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
          padding: 1rem
          margin: 1rem
          h1, h3
            text-align: center
          p
            text-align: justify
            margin-top: 0.75rem
          .surge-options
            display: grid
            grid-template-columns: 1fr 1fr
            justify-items: center
            .surge-option
              background-color: transparent
              transition: 0.25s
              &.selected
                font-weight: 600
                width: fit-content
                background-color: #ffffff33
    .text, .pro-button
      border-radius: 1em
      background-color: #ffffff88
    .grid, .info, .button
      display: grid
      justify-content: center
      align-content: center
      &.options
        grid-template-columns: 1fr 1fr
        justify-items: center
        width: 80%
        margin: auto
        @media (max-width: 400px)
          grid-template-columns: 1fr
          row-gap: 1rem

</style>
