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
.hamburger--vortex .hamburger-inner {
  transition-duration: 0.2s;
  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
}
.hamburger--vortex .hamburger-inner__before,
.hamburger--vortex .hamburger-inner__after {
  transition-duration: 0s;
  transition-delay: 0.1s;
  transition-timing-function: linear;
}
.hamburger--vortex .hamburger-inner__before {
  transition-property: top, opacity;
}
.hamburger--vortex .hamburger-inner__after {
  transition-property: bottom, transform;
}
.hamburger--vortex.hamburger--active .hamburger-inner {
  transform: rotate(765deg);
  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
}
.hamburger--vortex.hamburger--active .hamburger-inner__before,
.hamburger--vortex.hamburger--active .hamburger-inner__after {
  transition-delay: 0s;
}
.hamburger--vortex.hamburger--active .hamburger-inner__before {
  top: 0;
  opacity: 0;
}
.hamburger--vortex.hamburger--active .hamburger-inner__after {
  bottom: 0;
  transform: rotate(90deg);
}
/*
       * Vortex Reverse
       */
.hamburger--vortex-r .hamburger-inner {
  transition-duration: 0.2s;
  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
}
.hamburger--vortex-r .hamburger-inner__before,
.hamburger--vortex-r .hamburger-inner__after {
  transition-duration: 0s;
  transition-delay: 0.1s;
  transition-timing-function: linear;
}
.hamburger--vortex-r .hamburger-inner__before {
  transition-property: top, opacity;
}
.hamburger--vortex-r .hamburger-inner__after {
  transition-property: bottom, transform;
}
.hamburger--vortex-r.hamburger--active .hamburger-inner {
  transform: rotate(-765deg);
  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
}
.hamburger--vortex-r.hamburger--active .hamburger-inner__before,
.hamburger--vortex-r.hamburger--active .hamburger-inner__after {
  transition-delay: 0s;
}
.hamburger--vortex-r.hamburger--active .hamburger-inner__before {
  top: 0;
  opacity: 0;
}
.hamburger--vortex-r.hamburger--active .hamburger-inner__after {
  bottom: 0;
  transform: rotate(-90deg);
}
</style>
