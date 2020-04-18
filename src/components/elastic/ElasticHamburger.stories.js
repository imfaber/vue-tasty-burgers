import BurgerButton from '../BurgerButton.vue'

export default { title: 'ElasticHamburger' }

export const Default = () => ({
  components: { BurgerButton },
  template: '<BurgerButton type"elastic" />'
})

export const Reversed = () => ({
  components: { BurgerButton },
  template: '<BurgerButton type"elastic" reversed/>'
})
