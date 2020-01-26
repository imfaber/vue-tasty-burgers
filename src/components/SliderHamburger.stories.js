import SliderHamburger from './SliderHamburger.vue'

export default { title: 'SliderHamburger' }

export const Default = () => ({
  components: { SliderHamburger },
  template: '<slider-hamburger />'
})

export const Reversed = () => ({
  components: { SliderHamburger },
  template: '<slider-hamburger reversed/>'
})
