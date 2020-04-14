
<template>
  <plain-hamburger v-if="reversed" class="hamburger--arrowturn-r" v-on="$listeners"/>
  <plain-hamburger v-else class="hamburger--arrowturn" v-on="$listeners"/>
</template>

<script>
import PlainHamburger from './PlainHamburger.vue'

// TODO: Control the speed of animation by props
export default {
  name: 'ArrowTurnHamburger',
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
.hamburger--arrowturn.is-active .hamburger-inner {
  transform: rotate(-180deg);
}
.hamburger--arrowturn.is-active .hamburger-inner__before {
  transform: translate3d(8px, 0, 0) rotate(45deg) scale(0.7, 1);
}
.hamburger--arrowturn.is-active .hamburger-inner__after {
  transform: translate3d(8px, 0, 0) rotate(-45deg) scale(0.7, 1);
}
/*
     * Arrow Turn Right
     */
.hamburger--arrowturn-r.is-active .hamburger-inner {
  transform: rotate(-180deg);
}
.hamburger--arrowturn-r.is-active .hamburger-inner__before {
  transform: translate3d(-8px, 0, 0) rotate(-45deg) scale(0.7, 1);
}
.hamburger--arrowturn-r.is-active .hamburger-inner__after {
  transform: translate3d(-8px, 0, 0) rotate(45deg) scale(0.7, 1);
}
</style>
