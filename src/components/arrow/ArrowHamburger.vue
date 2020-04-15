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
.hamburger--arrow.is-active .hamburger-inner__before {
  transform: translate3d(-8px, 0, 0) rotate(-45deg) scale(0.7, 1);
}
.hamburger--arrow.is-active .hamburger-inner__after {
  transform: translate3d(-8px, 0, 0) rotate(45deg) scale(0.7, 1);
}
/*
       * Arrow Right
       */
.hamburger--arrow-r.is-active .hamburger-inner__before {
  transform: translate3d(8px, 0, 0) rotate(45deg) scale(0.7, 1);
}
.hamburger--arrow-r.is-active .hamburger-inner__after {
  transform: translate3d(8px, 0, 0) rotate(-45deg) scale(0.7, 1);
}
</style>
