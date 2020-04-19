<template>
  <button
    type="button"
    class="hamburger"
    :class="[hamburgerModifierClass, { 'hamburger--active': isActive, 'hamburger--rounded': rounded}]"
    @click.prevent="toggle"
  >
    <span class="hamburger-box" :style="buttonStyle">
      <span class="hamburger-inner" :style="layerStyle">
        <span class="hamburger-inner__before" :style="layerStyle" />
        <span class="hamburger-inner__after" :style="layerStyle" />
      </span>
    </span>
  </button>
</template>

<script>
import PropsMixins from '../mixins/props-mixin.js'

export default {
  inheritAttrs: false,
  mixins: [PropsMixins],

  data () {
    return {
      isActive: false,
      buttonStyle: null
    }
  },
  methods: {
    toggle () {
      this.isActive = !this.isActive
      this.$emit('toggle', this.isActive)
    }
  },
  watch: {
    active (newValue, oldValue) {
      if (newValue !== oldValue) {
        this.toggle()
      }
    }
  },
  computed: {
    layerStyle () {
      return {
        'background-color': this.isActive ? this.activeColor : this.color
      }
    },
    hamburgerModifierClass () {
      return `hamburger--${this.type}${this.reversed ? '-r' : ''}`
        // prevent double '-r-r' if both type suffix and 'reversed' prop are used
        .replace(/-r-r$/, '-r')
    }
  },
  created () {
    this.isActive = this.active

    switch (this.size) {
      case 'xs':
        this.buttonStyle = {
          transform: 'scale(0.5)',
          width: '20px',
          height: '13px'
        }
        break
      case 's':
        this.buttonStyle = {
          transform: 'scale(0.7)',
          width: '29px',
          height: '18px'
        }
        break
      case 'm':
        this.buttonStyle = {
          transform: 'scale(0.9)',
          width: '36px',
          height: '23px'
        }
        break
      case 'l':
        this.buttonStyle = {
          transform: 'scale(1.1)',
          width: '44px',
          height: '27px'
        }
        break
      case 'xl':
        this.buttonStyle = {
          transform: 'scale(1.3)',
          width: '52px',
          height: '32px'
        }
        break
    }
  }

}
</script>

<style lang="scss" scoped>
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
  position: absolute;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease;
}

.hamburger.hamburger--rounded {
  .hamburger-inner,
  .hamburger-inner__before,
  .hamburger-inner__after {
    border-radius: 4px;
  }
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
