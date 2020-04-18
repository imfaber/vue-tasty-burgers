import BurgerButton from '../BurgerButton.vue'

export default { title: 'Y3DHamburger' }

export const Default = () => ({
  components: { BurgerButton },
  template: '<BurgerButton type="3dy"/>'
})

export const Reversed = () => ({
  components: { BurgerButton },
  template: '<BurgerButton type="3dy" reversed/>'
})
