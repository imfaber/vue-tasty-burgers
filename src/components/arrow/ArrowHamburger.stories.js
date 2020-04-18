import BurgerButton from '../BurgerButton.vue'

export default { title: 'ArrowHamburger' }

export const Default = () => ({
  components: { BurgerButton },
  template: '<BurgerButton type="arrow"/>'
})

export const Reversed = () => ({
  components: { BurgerButton },
  template: '<BurgerButton type="arrow" reversed/>'
})

export const ReversedLegacy = () => ({
  components: { BurgerButton },
  template: '<BurgerButton type="arrow-r"/>'
})
