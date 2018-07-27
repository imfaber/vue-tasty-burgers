import TastyBurgerButton from './components/BurgerButton.vue'

function install(Vue, options) {
  Vue.component('tasty-burger-button', TastyBurgerButton);
  let key = 'tasty-burger-button';
  key = (options && options.prefix) ? `${options.prefix}-${key}` : key;
  Vue.component(key, TastyBurgerButton);
}

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use({ install });
}

export { install, TastyBurgerButton };
