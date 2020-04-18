import TastyBurgerButton from './components/BurgerButton.vue'

function install (Vue, options) {
  Vue.component('TastyBurgerButton', TastyBurgerButton)
  let prefix = ''

  if (options && 'prefix' in options) {
    prefix = options.prefix
    prefix = prefix.charAt(0).toUpperCase() + prefix.slice(1)
    prefix = prefix
      .replace(/-([a-z])/g, (g) => g[1].toUpperCase())
      .replace(/-/g, '')
  }

  const key = `${prefix}TastyBurgerButton`
  Vue.component(key, TastyBurgerButton)
}

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use({ install })
}

export { install, TastyBurgerButton }
