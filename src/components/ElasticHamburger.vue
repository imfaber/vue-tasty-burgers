
<template>
  <plain-hamburger v-if="reversed" class="hamburger--elastic-r" v-on="$listeners"/>
  <plain-hamburger v-else class="hamburger--elastic" v-on="$listeners"/>
</template>

<script>
import PlainHamburger from './PlainHamburger'

// TODO: Control the speed of animation by props
export default {
  name: 'ElasticHamburger',
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
.hamburger--elastic .hamburger-inner {
  top: 2px;
  transition-duration: 0.275s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.hamburger--elastic .hamburger-inner__before {
  top: 10px;
  transition: opacity 0.125s 0.275s ease;
}
.hamburger--elastic .hamburger-inner__after {
  top: 20px;
  transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.hamburger--elastic.is-active .hamburger-inner {
  transform: translate3d(0, 10px, 0) rotate(135deg);
  transition-delay: 0.075s;
}
.hamburger--elastic.is-active .hamburger-inner__before {
  transition-delay: 0s;
  opacity: 0;
}
.hamburger--elastic.is-active .hamburger-inner__after {
  transform: translate3d(0, -20px, 0) rotate(-270deg);
  transition-delay: 0.075s;
}
/*
       * Elastic Reverse
       */
.hamburger--elastic-r .hamburger-inner {
  top: 2px;
  transition-duration: 0.275s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.hamburger--elastic-r .hamburger-inner__before {
  top: 10px;
  transition: opacity 0.125s 0.275s ease;
}
.hamburger--elastic-r .hamburger-inner__after {
  top: 20px;
  transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.hamburger--elastic-r.is-active .hamburger-inner {
  transform: translate3d(0, 10px, 0) rotate(-135deg);
  transition-delay: 0.075s;
}
.hamburger--elastic-r.is-active .hamburger-inner__before {
  transition-delay: 0s;
  opacity: 0;
}
.hamburger--elastic-r.is-active .hamburger-inner__after {
  transform: translate3d(0, -20px, 0) rotate(270deg);
  transition-delay: 0.075s;
}
</style>
