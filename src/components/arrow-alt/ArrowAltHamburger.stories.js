import BurgerButton from '../BurgerButton.vue'

export default { title: 'ArrowAltHamburger' }

export const Default = () => ({
  components: { BurgerButton },
  template: '<BurgerButton type="arrowalt"/>'
})

export const Reversed = () => ({
  components: { BurgerButton },
  template: '<BurgerButton type="arrowalt" reversed/>'
})
