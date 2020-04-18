import BurgerButton from '../BurgerButton.vue'

export default { title: 'VortexHamburger' }

export const Default = () => ({
  components: { BurgerButton },
  template: '<BurgerButton type="vortex"/>'
})

export const Reversed = () => ({
  components: { BurgerButton },
  template: '<BurgerButton type="vortex" reversed/>'
})
