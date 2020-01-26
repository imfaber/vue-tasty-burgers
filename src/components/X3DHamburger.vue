
<template>
  <plain-hamburger v-if="reversed" class="hamburger--3dx-r" v-on="$listeners"/>
  <plain-hamburger v-else class="hamburger--3dx" v-on="$listeners"/>
</template>

<script>
import PlainHamburger from './PlainHamburger'

// TODO: Control the speed of animation by props
export default {
  name: 'X3DHamburger',
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
.hamburger--3dx .hamburger-box {
  perspective: 80px;
}
.hamburger--3dx .hamburger-inner {
  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),
    background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.hamburger--3dx .hamburger-inner__before,
.hamburger--3dx .hamburger-inner__after {
  transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.hamburger--3dx.is-active .hamburger-inner {
  background-color: transparent !important;
  transform: rotateY(180deg);
}
.hamburger--3dx.is-active .hamburger-inner__before {
  transform: translate3d(0, 10px, 0) rotate(45deg);
}
.hamburger--3dx.is-active .hamburger-inner__after {
  transform: translate3d(0, -10px, 0) rotate(-45deg);
}
/*
       * 3DX Reverse
       */
.hamburger--3dx-r .hamburger-box {
  perspective: 80px;
}
.hamburger--3dx-r .hamburger-inner {
  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),
    background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.hamburger--3dx-r .hamburger-inner__before,
.hamburger--3dx-r .hamburger-inner__after {
  transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.hamburger--3dx-r.is-active .hamburger-inner {
  background-color: transparent !important;
  transform: rotateY(-180deg);
}
.hamburger--3dx-r.is-active .hamburger-inner__before {
  transform: translate3d(0, 10px, 0) rotate(45deg);
}
.hamburger--3dx-r.is-active .hamburger-inner__after {
  transform: translate3d(0, -10px, 0) rotate(-45deg);
}
</style>
