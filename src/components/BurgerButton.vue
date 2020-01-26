<template>
    <component :is="components[type]" :reversed="isReversed" v-on="$listeners" />
</template>

<script>
const components = {
  arrowalt: () => import('./ArrowAltHamburger.vue'),
  arrow: () => import('./ArrowHamburger.vue'),
  arrowturn: () => import('./ArrowTurnHamburger.vue'),
  boring: () => import('./BoringHamburger.vue'),
  collapse: () => import('./CollapseHamburger.vue'),
  elastic: () => import('./ElasticHamburger.vue'),
  emphatic: () => import('./EmphaticHamburger.vue'),
  minus: () => import('./MinusHamburger.vue'),
  slider: () => import('./SliderHamburger.vue'),
  spin: () => import('./SpinHamburger.vue'),
  spring: () => import('./SpringHamburger.vue'),
  squeeze: () => import('./SqueezeHamburger.vue'),
  stand: () => import('./StandHamburger.vue'),
  vortex: () => import('./VortexHamburger.vue'),
  '3dx': () => import('./X3DHamburger.vue'),
  '3dy': () => import('./Y3DHamburger.vue'),
  '3dxy': () => import('./XY3DHamburger.vue')
}

export default {
  components,
  props: {
    type: {
      type: String,
      default: 'boring'
    },
    active: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: '#000000'
    },
    activeColor: {
      type: String,
      default: null
    },
    size: {
      type: String,
      validator: function (value) {
        return ['xs', 's', 'm', 'l', 'xl'].indexOf(value) !== -1
      },
      default: 'm'
    },
    reversed: {
      type: Boolean,
      default: () => false
    }
  },

  data () {
    return {
      components,
      burgerTypeClass: null,
      isActive: null
    }
  },

  created: function () {
    this.burgerTypeClass = `hamburger--${this.type}`
    this.isActive = this.active
    this._activeColor = this.activeColor || this.color

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
  },

  computed: {
    layerStyle: function () {
      return {
        'background-color': this.isActive ? this._activeColor : this.color
      }
    },
    isReversed: function () {
      const lastChars = this.type.slice(-2)
      return this.reversed || lastChars === '-r'
    }
  },

  methods: {
    toggle (e) {
      this.isActive = !this.isActive
      this.$emit('toggle', this.isActive)
    }
  },

  watch: {
    active (newValue, oldValue) {
      if (newValue !== oldValue) {
        this.isActive = newValue
        this.$emit('toggle', newValue)
      }
    }
  }
}
</script>
