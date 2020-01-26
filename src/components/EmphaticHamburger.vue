
<template>
  <plain-hamburger v-if="reversed" class="hamburger--emphatic-r" v-on="$listeners"/>
  <plain-hamburger v-else class="hamburger--emphatic" v-on="$listeners"/>
</template>

<script>
import PlainHamburger from './PlainHamburger';

// TODO: Control the speed of animation by props
export default {
  name: 'EmphaticHamburger',
  components: {
    PlainHamburger,
  },
  props: {
    reversed: {
      type: Boolean,
      default: () => false,
    },
  },
};
</script>

<style>
.hamburger--emphatic {
  height: 40px;
  overflow: hidden;
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
.hamburger--emphatic.is-active .hamburger-inner {
  transition-delay: 0s;
  transition-timing-function: ease-out;
  background-color: transparent !important;
}
.hamburger--emphatic.is-active .hamburger-inner__before {
  left: -80px;
  top: -80px;
  transform: translate3d(80px, 80px, 0) rotate(45deg);
  transition: left 0.125s ease-out, top 0.05s 0.125s linear,
    transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.hamburger--emphatic.is-active .hamburger-inner__after {
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
  height: 40px;
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
.hamburger--emphatic-r.is-active .hamburger-inner {
  transition-delay: 0s;
  transition-timing-function: ease-out;
  background-color: transparent !important;
}
.hamburger--emphatic-r.is-active .hamburger-inner__before {
  left: -80px;
  top: 80px;
  transform: translate3d(80px, -80px, 0) rotate(-45deg);
  transition: left 0.125s ease-out, top 0.05s 0.125s linear,
    transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.hamburger--emphatic-r.is-active .hamburger-inner__after {
  right: -80px;
  top: 80px;
  transform: translate3d(-80px, -80px, 0) rotate(45deg);
  transition: right 0.125s ease-out, top 0.05s 0.125s linear,
    transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);
}
</style>
