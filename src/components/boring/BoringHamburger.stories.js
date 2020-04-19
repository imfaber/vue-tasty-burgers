import BurgerButton from '../BurgerButton.vue'

export default { title: 'BoringHamburger' }

export const Default = () => ({
  components: { BurgerButton },
  template: '<BurgerButton/>'
})

export const Flat = () => ({
  components: { BurgerButton },
  template: '<BurgerButton :rounded="false" />',
})
