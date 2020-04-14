
<template>
  <plain-hamburger v-if="reversed" class="hamburger--3dxy-r" v-on="$listeners"/>
  <plain-hamburger v-else class="hamburger--3dxy" v-on="$listeners"/>
</template>

<script>
import PlainHamburger from './PlainHamburger.vue'

// TODO: Control the speed of animation by props
export default {
  name: 'XY3DHamburger',
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
.hamburger--3dxy .hamburger-box {
  perspective: 80px;
}
.hamburger--3dxy .hamburger-inner {
  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),
    background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.hamburger--3dxy .hamburger-inner__before,
.hamburger--3dxy .hamburger-inner__after {
  transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.hamburger--3dxy.is-active .hamburger-inner {
  background-color: transparent !important;
  transform: rotateX(180deg) rotateY(180deg);
}
.hamburger--3dxy.is-active .hamburger-inner__before {
  transform: translate3d(0, 10px, 0) rotate(45deg);
}
.hamburger--3dxy.is-active .hamburger-inner__after {
  transform: translate3d(0, -10px, 0) rotate(-45deg);
}
/*
       * 3DXY Reverse
       */
.hamburger--3dxy-r .hamburger-box {
  perspective: 80px;
}
.hamburger--3dxy-r .hamburger-inner {
  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),
    background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.hamburger--3dxy-r .hamburger-inner__before,
.hamburger--3dxy-r .hamburger-inner__after {
  transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.hamburger--3dxy-r.is-active .hamburger-inner {
  background-color: transparent !important;
  transform: rotateX(180deg) rotateY(180deg) rotateZ(-180deg);
}
.hamburger--3dxy-r.is-active .hamburger-inner__before {
  transform: translate3d(0, 10px, 0) rotate(45deg);
}
.hamburger--3dxy-r.is-active .hamburger-inner__after {
  transform: translate3d(0, -10px, 0) rotate(-45deg);
}
</style>
