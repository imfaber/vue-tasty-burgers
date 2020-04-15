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
.hamburger--stand .hamburger-inner {
  transition: transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19),
    background-color 0s 0.075s linear;
}
.hamburger--stand .hamburger-inner__before {
  transition: top 0.075s 0.075s ease-in,
    transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
.hamburger--stand .hamburger-inner__after {
  transition: bottom 0.075s 0.075s ease-in,
    transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
.hamburger--stand.is-active .hamburger-inner {
  transform: rotate(90deg);
  background-color: transparent !important;
  transition: transform 0.075s 0s cubic-bezier(0.215, 0.61, 0.355, 1),
    background-color 0s 0.15s linear;
}
.hamburger--stand.is-active .hamburger-inner__before {
  top: 0;
  transform: rotate(-45deg);
  transition: top 0.075s 0.1s ease-out,
    transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.hamburger--stand.is-active .hamburger-inner__after {
  bottom: 0;
  transform: rotate(45deg);
  transition: bottom 0.075s 0.1s ease-out,
    transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
}
/*
       * Stand Reverse
       */
.hamburger--stand-r .hamburger-inner {
  transition: transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19),
    background-color 0s 0.075s linear;
}
.hamburger--stand-r .hamburger-inner__before {
  transition: top 0.075s 0.075s ease-in,
    transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
.hamburger--stand-r .hamburger-inner__after {
  transition: bottom 0.075s 0.075s ease-in,
    transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
.hamburger--stand-r.is-active .hamburger-inner {
  transform: rotate(-90deg);
  background-color: transparent !important;
  transition: transform 0.075s 0s cubic-bezier(0.215, 0.61, 0.355, 1),
    background-color 0s 0.15s linear;
}
.hamburger--stand-r.is-active .hamburger-inner__before {
  top: 0;
  transform: rotate(-45deg);
  transition: top 0.075s 0.1s ease-out,
    transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.hamburger--stand-r.is-active .hamburger-inner__after {
  bottom: 0;
  transform: rotate(45deg);
  transition: bottom 0.075s 0.1s ease-out,
    transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
}
</style>
