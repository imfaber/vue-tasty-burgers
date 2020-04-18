import BurgerButton from '../BurgerButton.vue'

export default { title: 'StandHamburger' }

export const Default = () => ({
  components: { BurgerButton },
  template: '<BurgerButton type="stand"/>'
})

export const Reversed = () => ({
  components: { BurgerButton },
  template: '<BurgerButton type="stand" reversed/>'
})
