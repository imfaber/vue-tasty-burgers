import VortexHamburger from './VortexHamburger.vue'

export default { title: 'VortexHamburger' }

export const Default = () => ({
  components: { VortexHamburger },
  template: '<vortex-hamburger />'
})

export const Reversed = () => ({
  components: { VortexHamburger },
  template: '<vortex-hamburger reversed/>'
})
