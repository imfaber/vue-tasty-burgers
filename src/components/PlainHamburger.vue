<template>
  <button type="button" class="hamburger" :class="{'is-active' : isActive}" @click.prevent="toggle">
    <span class="hamburger-box">
      <span class="hamburger-inner">
        <span class="hamburger-inner__before" />
        <span class="hamburger-inner__after" />
      </span>
    </span>
  </button>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.hamburger {
  padding: 0;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent !important;
  border: 0;
  margin: 0;
  overflow: visible;
}

.hamburger:hover,
.hamburger:focus {
  opacity: 0.7;
  outline: none;
}

.hamburger::-moz-focus-inner {
  border: 0;
}

.hamburger-box {
  width: 40px;
  height: 24px;
  display: block;
  position: relative;
  transform-origin: center left;
}

.hamburger-inner {
  display: block;
  top: 50%;
  margin-top: -2px;
}

.hamburger-inner,
.hamburger-inner__before,
.hamburger-inner__after {
  width: 40px;
  height: 4px;
  background-color: #000;
  border-radius: 4px;
  position: absolute;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease;
}

.hamburger-inner__before,
.hamburger-inner__after {
  content: "";
  display: block;
}

.hamburger-inner__before {
  top: -10px;
}

.hamburger-inner__after {
  bottom: -10px;
}
</style>