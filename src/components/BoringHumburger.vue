<template>
  <plain-hamburger class="hamburger--boring" @toggle="$emit('toggle')" />
</template>

<script>
import PlainHamburger from './PlainHamburger'

export default {
  name: 'BoringHamburger',
  components: {
    PlainHamburger
  }
}
</script>

<style>
.hamburger--boring .hamburger-inner,
.hamburger--boring .hamburger-inner__before,
.hamburger--boring .hamburger-inner__after {
  transition-property: none;
}

.hamburger--boring.is-active .hamburger-inner {
  transform: rotate(45deg);
}

.hamburger--boring.is-active .hamburger-inner__before {
  top: 0;
  opacity: 0;
}

.hamburger--boring.is-active .hamburger-inner__after {
  bottom: 0;
  transform: rotate(-90deg);
}
</style>
