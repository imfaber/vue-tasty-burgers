import ArrowTurnHamburger from './ArrowTurnHamburger.vue'

export default { title: 'ArrowTurnHamburger' }

export const Default = () => ({
  components: { ArrowTurnHamburger },
  template: '<arrow-turn-hamburger />'
})

export const Reversed = () => ({
  components: { ArrowTurnHamburger },
  template: '<arrow-turn-hamburger reversed/>'
})
