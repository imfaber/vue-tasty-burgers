<template>
  <PlainHamburger v-on="$listeners" v-bind="{...$props, ...$attrs}"/>
</template>

<script>
import PlainHamburger from '../PlainHamburger.vue'

export default {
  name: 'ArrowAltHamburger',
  components: { PlainHamburger },
  inheritAttrs: false
}
</script>

<style>
.hamburger--arrowalt .hamburger-inner__before {
  transition: top 0.1s 0.1s ease,
    transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.hamburger--arrowalt .hamburger-inner__after {
  transition: bottom 0.1s 0.1s ease,
    transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.hamburger--arrowalt.hamburger--active .hamburger-inner__before {
  top: 0;
  transform: translate3d(-8px, -10px, 0) rotate(-45deg) scale(0.7, 1);
  transition: top 0.1s ease,
    transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);
}
.hamburger--arrowalt.hamburger--active .hamburger-inner__after {
  bottom: 0;
  transform: translate3d(-8px, 10px, 0) rotate(45deg) scale(0.7, 1);
  transition: bottom 0.1s ease,
    transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);
}
/*
* Arrow Alt Right
*/
.hamburger--arrowalt-r .hamburger-inner__before {
  transition: top 0.1s 0.1s ease,
    transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.hamburger--arrowalt-r .hamburger-inner__after {
  transition: bottom 0.1s 0.1s ease,
    transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.hamburger--arrowalt-r.hamburger--active .hamburger-inner__before {
  top: 0;
  transform: translate3d(8px, -10px, 0) rotate(45deg) scale(0.7, 1);
  transition: top 0.1s ease,
    transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);
}
.hamburger--arrowalt-r.hamburger--active .hamburger-inner__after {
  bottom: 0;
  transform: translate3d(8px, 10px, 0) rotate(-45deg) scale(0.7, 1);
  transition: bottom 0.1s ease,
    transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);
}
</style>
