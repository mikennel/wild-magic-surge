<script>
import Airtable from 'airtable'
import fireworks from '../fireworks'

export default {
  name: 'PublicHome',
  components: {
  },
  data () {
    return {
      hasSurged: false,
      positions: ["circle at top left","circle at top right","circle at bottom left","circle at bottom right"],
      surgeRoll: [],
      bgRadials: null,
      bgColor: null,
      surgeTable: [],
      numSurges: 0,
      displaySurge: 0,
      surgeTablesList: [
        {label: "Original", id: "tblHB4hFJhFJn7OoM"},
        {label: "Eilean Dorcha", id: "tblYEsaUHNC0giUR7"}
      ],
      loadingSurgeTable: false,
    }
  },
  methods: {
    surge() {
      if (!this.hasSurged) {
        this.hasSurged = true
      }
      for (let i = 0; i < this.numSurges; i++) {
        this.surgeRoll[i] = Math.floor(Math.random() * this.surgeTable.length)
      }
      this.bgColor = `rgba(${this.colorVal()}, ${this.colorVal()}, ${this.colorVal()}, 1)`
      this.bgRadials = this.setBgPatterns()
    },
    setSurges(numSurges) {
      this.numSurges = numSurges
      this.surge()
    },
    colorVal() {
      return Math.floor((Math.random() * 255) +1)
    },
    rgbVal() {
      return `${this.colorVal()}, ${this.colorVal()}, ${this.colorVal()}, ${((Math.random() * 0.8) + 0.1 ).toFixed(1)}`
    },
    sizeVal() {
      return Math.floor((Math.random() * 100) + 30)
    },
    setPositions() {
      // const numPositions = Math.floor(Math.random() * 4 + 1)
      const numPositions = 1
      this.positions = []
      for (let i = 0; i <= numPositions; i++) {
        const x = Math.floor((Math.random() * 100) + 1)
        const y = Math.floor((Math.random() * 100) + 1)
        this.positions.push(`${x}% ${y}%`)
      }
    },
    setBgPatterns() {
      let returnVal = []
      this.setPositions()
      this.positions.forEach((position) => {
        const pattern = Math.floor(Math.random() * 3)
        if (pattern == 0)
          returnVal.push(this.generateRadial(position))
        else if (pattern == 1)
          returnVal.push(this.generateConic(position))
        else if (pattern == 2)
          returnVal.push(this.generateGradient())
      })
      
      return returnVal.join(',')
    },
    generateRadial(position) {
      return `radial-gradient(
          circle at ${position},
          rgba(${this.rgbVal()}),
          ${Math.floor(Math.random() * 2) ? `rgba(${this.rgbVal()}),` : ""}
          transparent ${this.sizeVal()}vw
        )`
    },
    generateConic(position) {
      const startColor = this.rgbVal()
      const secondStep = Math.ceil(Math.random() * 10)
      let thirdStep = 2
      if ([7].includes(secondStep))
        thirdStep = 2.05
      if ([8].includes(secondStep))
        thirdStep = 2.075
      if ([4,6].includes(secondStep))
        thirdStep = 2.1
      if ([3].includes(secondStep))
        thirdStep = 2.225
      if ([9].includes(secondStep))
        thirdStep = 2.25
      return `repeating-conic-gradient(
        from ${Math.floor(Math.random() * 180)}deg at ${position},
        rgba(${startColor}) 0%,
        rgba(${this.rgbVal()}) ${secondStep}%,
        rgba(${startColor}) ${secondStep * thirdStep}%
      )`
    },
    generateGradient() {
      return `linear-gradient(${Math.ceil(Math.random() * 180)}deg,
        rgba(${this.rgbVal()}),
        rgba(${this.rgbVal()})
      )`
    }, 
    getSurgeTable (airtableTableId) {
      this.loadingSurgeTable = true
      const airtableKey = import.meta.env.VITE_AIRTABLE_KEY
      const airtableBaseId = 'appNZQKmwZoWDBqC6'
      Airtable.configure({apiKey: airtableKey})
      const base = Airtable.base(airtableBaseId)
      
      base(airtableTableId).select().eachPage((records, fetchNextPage) => {
        this.surgeTable = [...this.surgeTable, ...records.map(record => record.fields.Surge)]
        fetchNextPage()
      }, (err) => {
        this.loadingSurgeTable = false
        if (err) {
          console.error('error',err)
          return
        }
      })
    },
    openPopUp() {
      window.open("https://wild-magic-surge.web.app", "Wild Magic Surge", "popup=yes, width=500, height=500, location=no")
    }
  },
  computed: {
  },
  mounted () {
    // this.getSurgeTable()
    fireworks()
  }
}
</script>

<template lang="pug">
.main-container(
  :style='{background: bgRadials, "background-color": bgColor}'
)
  canvas(id='canvas')
  .grid
    .info
      .text(v-if='!hasSurged && (!surgeTable.length || loadingSurgeTable)')
        h1 {{loadingSurgeTable ? 'Loading Surge Table' : 'Select your surge table.'}}
      .text(
        v-if='!hasSurged && surgeTable.length && !loadingSurgeTable'
      ) 
        h1 Looks like your wild magic is about to surge...
      .text(
        v-if='hasSurged'
      ) 
        //- h3(
        //-   v-if='numSurges === 1'
        //- ) {{surgeRoll[displaySurge]+1}}
        .surge-options(
          v-if='numSurges === 2'
        )
          .pro-button.surge-option(
            v-for='(option,idx) in surgeRoll'
            @click='displaySurge = idx'
            :class='{selected: displaySurge === idx}'
          ) Option {{idx+1}}
        p {{surgeTable[surgeRoll[displaySurge]]}} 
    .button.options(v-if='!hasSurged && !surgeTable.length && !loadingSurgeTable')
      .pro-button.outline(
        v-for='table in surgeTablesList'
        @click='getSurgeTable(table.id)'
      ) {{ table.label }}
    .button.options(
      v-if='!hasSurged && surgeTable.length && !loadingSurgeTable'
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
  .button.pop-up-handler(v-if='!hasSurged') 
    .pro-button(@click='openPopUp()') Popup!
</template>

<style lang="sass" scoped>
@import '../assets/vars'
@import '../assets/form'
.main-container
  transition: .5s
  font-size: 1.3em
  height: 100vh
  #canvas
    position: absolute
    // pointer-events: none
    z-index: 1
  .grid
    grid-template-rows: 80% 20%
    grid-template-columns: 100%
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
  .button, .info > .text > .surge-options
    position: relative
    z-index: 10
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
  .button.pop-up-handler
    position: fixed
    bottom: 0
    right: 0
    opacity: 0

</style>
