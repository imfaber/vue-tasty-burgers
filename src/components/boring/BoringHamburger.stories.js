import BurgerButton from '../BurgerButton.vue'

export default { title: 'BoringHamburger' }

export const Default = () => ({
  components: { BurgerButton },
  template: '<BurgerButton :active="active" @toggle="onToggle" :color="color" :active-color="color" class="dsfdsfasfafas" />',
  data () {
    return {
      active: false,
      color: 'red'
    }
  },
  created () {
    setTimeout(() => {
      this.active = true
      this.color = 'green'
    }, 2000)
  },
  methods: {
    onToggle (active) {
      console.log('New button status', active)
    }
  }
})
