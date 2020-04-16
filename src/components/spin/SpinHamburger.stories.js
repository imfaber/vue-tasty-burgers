import BurgerButton from '../BurgerButton.vue'

export default { title: 'SpinHamburger' }

export const Default = () => ({
  components: { BurgerButton },
  template: '<BurgerButton type="spin"/>'
})

export const Reversed = () => ({
  components: { BurgerButton },
  template: '<BurgerButton type="spin" reversed/>'
})
