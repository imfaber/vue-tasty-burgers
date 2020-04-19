<template>
  <PlainHamburger v-on="$listeners" v-bind="{...$props, ...$attrs}"/>
</template>

<script>
import PlainHamburger from '../PlainHamburger.vue'

export default {
  components: { PlainHamburger },
  inheritAttrs: false
}
</script>
<style>
.hamburger--arrow.hamburger--active .hamburger-inner__before {
  transform: translate3d(-8px, 0, 0) rotate(-45deg) scale(0.7, 1);
}
.hamburger--arrow.hamburger--active .hamburger-inner__after {
  transform: translate3d(-8px, 0, 0) rotate(45deg) scale(0.7, 1);
}
/*
       * Arrow Right
       */
.hamburger--arrow-r.hamburger--active .hamburger-inner__before {
  transform: translate3d(8px, 0, 0) rotate(45deg) scale(0.7, 1);
}
.hamburger--arrow-r.hamburger--active .hamburger-inner__after {
  transform: translate3d(8px, 0, 0) rotate(-45deg) scale(0.7, 1);
}
</style>
