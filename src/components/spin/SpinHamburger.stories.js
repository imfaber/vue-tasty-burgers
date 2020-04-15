import SpinHamburger from './SpinHamburger.vue'

export default { title: 'SpinHamburger' }

export const Default = () => ({
  components: { SpinHamburger },
  template: '<spin-hamburger />'
})

export const Reversed = () => ({
  components: { SpinHamburger },
  template: '<spin-hamburger reversed/>'
})
