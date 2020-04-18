import BurgerButton from '../BurgerButton.vue'

export default { title: 'ArrowTurnHamburger' }

export const Default = () => ({
  components: { BurgerButton },
  template: '<BurgerButton type="arrowturn"/>'
})

export const Reversed = () => ({
  components: { BurgerButton },
  template: '<BurgerButton type="arrowturn" reversed/>'
})
