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
.hamburger--spring .hamburger-inner {
  top: 2px;
  transition: background-color 0s 0.13s linear;
}
.hamburger--spring .hamburger-inner__before {
  top: 10px;
  transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
    transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
.hamburger--spring .hamburger-inner__after {
  top: 20px;
  transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
    transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
.hamburger--spring.hamburger--active .hamburger-inner {
  transition-delay: 0.22s;
  background-color: transparent !important;
}
.hamburger--spring.hamburger--active .hamburger-inner__before {
  top: 0;
  transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
    transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);
  transform: translate3d(0, 10px, 0) rotate(45deg);
}
.hamburger--spring.hamburger--active .hamburger-inner__after {
  top: 0;
  transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
    transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);
  transform: translate3d(0, 10px, 0) rotate(-45deg);
}
/*
       * Spring Reverse
       */
.hamburger--spring-r .hamburger-inner {
  top: auto;
  bottom: 0;
  transition-duration: 0.13s;
  transition-delay: 0s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
.hamburger--spring-r .hamburger-inner__after {
  top: -20px;
  transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
    opacity 0s linear;
}
.hamburger--spring-r .hamburger-inner__before {
  transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
    transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
.hamburger--spring-r.hamburger--active .hamburger-inner {
  transform: translate3d(0, -10px, 0) rotate(-45deg);
  transition-delay: 0.22s;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
.hamburger--spring-r.hamburger--active .hamburger-inner__after {
  top: 0;
  opacity: 0;
  transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
    opacity 0s 0.22s linear;
}
.hamburger--spring-r.hamburger--active .hamburger-inner__before {
  top: 0;
  transform: rotate(90deg);
  transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
    transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);
}
</style>
