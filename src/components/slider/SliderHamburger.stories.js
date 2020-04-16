import BurgerButton from '../BurgerButton.vue'

export default { title: 'SliderHamburger' }

export const Default = () => ({
  components: { BurgerButton },
  template: '<BurgerButton type="slider"/>'
})

export const Reversed = () => ({
  components: { BurgerButton },
  template: '<BurgerButton type="slider" reversed/>'
})
