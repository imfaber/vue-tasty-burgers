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
.hamburger--boring .hamburger-inner,
.hamburger--boring .hamburger-inner__before,
.hamburger--boring .hamburger-inner__after {
  transition-property: none;
}

.hamburger--boring.hamburger--active .hamburger-inner {
  transform: rotate(45deg);
}

.hamburger--boring.hamburger--active .hamburger-inner__before {
  top: 0;
  opacity: 0;
}

.hamburger--boring.hamburger--active .hamburger-inner__after {
  bottom: 0;
  transform: rotate(-90deg);
}
</style>
