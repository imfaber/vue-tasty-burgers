import Y3DHamburger from './Y3DHamburger.vue'

export default { title: 'Y3DHamburger' }

export const Default = () => ({
  components: { Y3DHamburger },
  template: '<y-3-d-hamburger />'
})

export const Reversed = () => ({
  components: { Y3DHamburger },
  template: '<y-3-d-hamburger reversed/>'
})
