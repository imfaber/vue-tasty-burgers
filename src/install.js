import VueTastyBurger from './components/BurgerButton.vue'

const install = (Vue, options = {}) => {
  console.log(VueTastyBurger);
  Vue.component('vue-tasty-burger', VueTastyBurger);
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export { install }
