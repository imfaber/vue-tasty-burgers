<template>
  <PlainHamburger v-on="$listeners" v-bind="$props"/>
</template>

<script>
import PlainHamburger from '../PlainHamburger.vue'
import PropsMixins from '../../mixins/props-mixin.js'

export default {
  components: { PlainHamburger },
  mixins: [PropsMixins]
}
</script>

<style>
.hamburger--minus .hamburger-inner__before,
.hamburger--minus .hamburger-inner__after {
  transition: bottom 0.08s 0s ease-out, top 0.08s 0s ease-out, opacity 0s linear;
}

.hamburger--minus.is-active .hamburger-inner__before,
.hamburger--minus.is-active .hamburger-inner__after {
  opacity: 0;
  transition: bottom 0.08s ease-out, top 0.08s ease-out, opacity 0s 0.08s linear;
}

.hamburger--minus.is-active .hamburger-inner__before {
  top: 0;
}

.hamburger--minus.is-active .hamburger-inner__after {
  bottom: 0;
}
</style>
