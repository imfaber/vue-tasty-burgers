import SpringHamburger from './SpringHamburger.vue'

export default { title: 'SpringHamburger' }

export const Default = () => ({
  components: { SpringHamburger },
  template: '<spring-hamburger />'
})

export const Reversed = () => ({
  components: { SpringHamburger },
  template: '<spring-hamburger reversed/>'
})
