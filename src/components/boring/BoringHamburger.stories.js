import BurgerButton from '../BurgerButton.vue'

export default { title: 'BoringHamburger' }

export const Default = () => ({
  components: { BurgerButton },
  template: '<BurgerButton @toggle="onToggle" />',
  methods: {
    onToggle (active) {
      console.log('New button status', active)
    }
  }
})
