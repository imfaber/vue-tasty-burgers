<template>
  <plain-hamburger v-if="reversed" class="hamburger--slider-r" v-on="$listeners"/>
  <plain-hamburger v-else class="hamburger--slider" v-on="$listeners"/>
</template>

<script>
import PlainHamburger from './PlainHamburger'

// TODO: Control the speed of animation by props
export default {
  name: 'SliderHamburger',
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
.hamburger--slider .hamburger-inner {
  top: 2px;
}

.hamburger--slider .hamburger-inner__before {
  top: 10px;
  transition-property: transform, opacity;
  transition-timing-function: ease;
  transition-duration: 0.15s;
}

.hamburger--slider .hamburger-inner__after {
  top: 20px;
}

.hamburger--slider.is-active .hamburger-inner {
  transform: translate3d(0, 10px, 0) rotate(45deg);
}

.hamburger--slider.is-active .hamburger-inner__before {
  transform: rotate(-45deg) translate3d(-5.71429px, -6px, 0);
  opacity: 0;
}

.hamburger--slider.is-active .hamburger-inner__after {
  transform: translate3d(0, -20px, 0) rotate(-90deg);
}
/*
       * Slider Reverse
       */
.hamburger--slider-r .hamburger-inner {
  top: 2px;
}
.hamburger--slider-r .hamburger-inner__before {
  top: 10px;
  transition-property: transform, opacity;
  transition-timing-function: ease;
  transition-duration: 0.15s;
}
.hamburger--slider-r .hamburger-inner__after {
  top: 20px;
}
.hamburger--slider-r.is-active .hamburger-inner {
  transform: translate3d(0, 10px, 0) rotate(-45deg);
}
.hamburger--slider-r.is-active .hamburger-inner__before {
  transform: rotate(45deg) translate3d(5.71429px, -6px, 0);
  opacity: 0;
}
.hamburger--slider-r.is-active .hamburger-inner__after {
  transform: translate3d(0, -20px, 0) rotate(90deg);
}
</style>
