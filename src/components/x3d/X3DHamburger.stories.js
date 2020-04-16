import BurgerButton from '../BurgerButton.vue'

export default { title: 'X3DHamburger' }

export const Default = () => ({
  components: { BurgerButton },
  template: '<BurgerButton type="3dx"/>'
})

export const Reversed = () => ({
  components: { BurgerButton },
  template: '<BurgerButton type="3dx" reversed/>'
})
