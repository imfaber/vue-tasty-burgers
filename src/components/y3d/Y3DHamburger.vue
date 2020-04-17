<template>
  <PlainHamburger v-on="$listeners" v-bind="{...$props, ...$attrs}"/>
</template>

<script>
import PlainHamburger from '../PlainHamburger.vue'

export default {
  name: 'Y3DHamburger',
  components: { PlainHamburger },
  inheritAttrs: false
}
</script>

<style>
.hamburger--3dy .hamburger-box {
  perspective: 80px;
}
.hamburger--3dy .hamburger-inner {
  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),
    background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.hamburger--3dy .hamburger-inner__before,
.hamburger--3dy .hamburger-inner__after {
  transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.hamburger--3dy.is-active .hamburger-inner {
  background-color: transparent !important;
  transform: rotateX(-180deg);
}
.hamburger--3dy.is-active .hamburger-inner__before {
  transform: translate3d(0, 10px, 0) rotate(45deg);
}
.hamburger--3dy.is-active .hamburger-inner__after {
  transform: translate3d(0, -10px, 0) rotate(-45deg);
}
/*
       * 3DY Reverse
       */
.hamburger--3dy-r .hamburger-box {
  perspective: 80px;
}
.hamburger--3dy-r .hamburger-inner {
  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),
    background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.hamburger--3dy-r .hamburger-inner__before,
.hamburger--3dy-r .hamburger-inner__after {
  transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.hamburger--3dy-r.is-active .hamburger-inner {
  background-color: transparent !important;
  transform: rotateX(180deg);
}
.hamburger--3dy-r.is-active .hamburger-inner__before {
  transform: translate3d(0, 10px, 0) rotate(45deg);
}
.hamburger--3dy-r.is-active .hamburger-inner__after {
  transform: translate3d(0, -10px, 0) rotate(-45deg);
}
</style>
