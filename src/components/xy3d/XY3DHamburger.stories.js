import BurgerButton from '../BurgerButton.vue'

export default { title: 'XY3DHamburger' }

export const Default = () => ({
  components: { BurgerButton },
  template: '<BurgerButton type="3dxy"/>'
})

export const Reversed = () => ({
  components: { BurgerButton },
  template: '<BurgerButton type="3dxy" reversed/>'
})
