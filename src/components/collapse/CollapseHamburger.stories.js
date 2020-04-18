import BurgerButton from '../BurgerButton.vue'

export default { title: 'CollapseHamburger' }

export const Default = () => ({
  components: { BurgerButton },
  template: '<BurgerButton type="collapse"/>'
})

export const Reversed = () => ({
  components: { BurgerButton },
  template: '<BurgerButton type="collapse" reversed/>'
})
