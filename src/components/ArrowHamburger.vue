
<template>
  <plain-hamburger v-if="reversed" class="hamburger--arrow-r" v-on="$listeners"/>
  <plain-hamburger v-else class="hamburger--arrow" v-on="$listeners"/>
</template>

<script>
import PlainHamburger from './PlainHamburger.vue'

// TODO: Control the speed of animation by props
export default {
  name: 'ArrowHamburger',
  components: {
    PlainHamburger
  },
  props: {
    reversed: {
      type: Boolean,
      default: () => false
    }
  }
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
