import BurgerButton from '../BurgerButton.vue'

export default { title: 'SpringHamburger' }

export const Default = () => ({
  components: { BurgerButton },
  template: '<BurgerButton type="spring"/>'
})

export const Reversed = () => ({
  components: { BurgerButton },
  template: '<BurgerButton type="spring" reversed/>'
})
