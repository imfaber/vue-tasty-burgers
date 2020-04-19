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
.hamburger.hamburger--emphatic {
  overflow: hidden;
  padding: 15px;
}
.hamburger--emphatic .hamburger-inner {
  transition: background-color 0.125s 0.175s ease-in;
}
.hamburger--emphatic .hamburger-inner__before {
  left: 0;
  transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335),
    top 0.05s 0.125s linear, left 0.125s 0.175s ease-in;
}
.hamburger--emphatic .hamburger-inner__after {
  top: 10px;
  right: 0;
  transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335),
    top 0.05s 0.125s linear, right 0.125s 0.175s ease-in;
}
.hamburger--emphatic.hamburger--active .hamburger-inner {
  transition-delay: 0s;
  transition-timing-function: ease-out;
  background-color: transparent !important;
}
.hamburger--emphatic.hamburger--active .hamburger-inner__before {
  left: -80px;
  top: -80px;
  transform: translate3d(80px, 80px, 0) rotate(45deg);
  transition: left 0.125s ease-out, top 0.05s 0.125s linear,
    transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.hamburger--emphatic.hamburger--active .hamburger-inner__after {
  right: -80px;
  top: -80px;
  transform: translate3d(-80px, 80px, 0) rotate(-45deg);
  transition: right 0.125s ease-out, top 0.05s 0.125s linear,
    transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);
}
/*
* Emphatic Reverse
*/
.hamburger--emphatic-r {
  padding: 15px;
  overflow: hidden;
}
.hamburger--emphatic-r .hamburger-inner {
  transition: background-color 0.125s 0.175s ease-in;
}
.hamburger--emphatic-r .hamburger-inner__before {
  left: 0;
  transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335),
    top 0.05s 0.125s linear, left 0.125s 0.175s ease-in;
}
.hamburger--emphatic-r .hamburger-inner__after {
  top: 10px;
  right: 0;
  transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335),
    top 0.05s 0.125s linear, right 0.125s 0.175s ease-in;
}
.hamburger--emphatic-r.hamburger--active .hamburger-inner {
  transition-delay: 0s;
  transition-timing-function: ease-out;
  background-color: transparent !important;
}
.hamburger--emphatic-r.hamburger--active .hamburger-inner__before {
  left: -80px;
  top: 80px;
  transform: translate3d(80px, -80px, 0) rotate(-45deg);
  transition: left 0.125s ease-out, top 0.05s 0.125s linear,
    transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.hamburger--emphatic-r.hamburger--active .hamburger-inner__after {
  right: -80px;
  top: 80px;
  transform: translate3d(-80px, -80px, 0) rotate(45deg);
  transition: right 0.125s ease-out, top 0.05s 0.125s linear,
    transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);
}
</style>
