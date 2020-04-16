import BurgerButton from '../BurgerButton.vue'

export default { title: 'EmphaticHamburger' }

export const Default = () => ({
  components: { BurgerButton },
  template: '<BurgerButton type="emphatic"/>'
})

export const Reversed = () => ({
  components: { BurgerButton },
  template: '<BurgerButton type="emphatic" reversed/>'
})
