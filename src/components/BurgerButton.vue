<template>
    <component :is="components[computedType]" v-on="$listeners" v-bind="$props" />
</template>

<script>
import PropsMixins from '../mixins/props-mixin.js'

const components = {
  arrowalt: () => import('./arrow-alt/ArrowAltHamburger.vue'),
  arrow: () => import('./arrow/ArrowHamburger.vue'),
  arrowturn: () => import('./arrow-turn/ArrowTurnHamburger.vue'),
  boring: () => import('./boring/BoringHamburger.vue'),
  collapse: () => import('./collapse/CollapseHamburger.vue'),
  elastic: () => import('./elastic/ElasticHamburger.vue'),
  emphatic: () => import('./emphatic/EmphaticHamburger.vue'),
  minus: () => import('./minus/MinusHamburger.vue'),
  slider: () => import('./slider/SliderHamburger.vue'),
  spin: () => import('./spin/SpinHamburger.vue'),
  spring: () => import('./spring/SpringHamburger.vue'),
  squeeze: () => import('./squeeze/SqueezeHamburger.vue'),
  stand: () => import('./stand/StandHamburger.vue'),
  vortex: () => import('./vortex/VortexHamburger.vue'),
  x3d: () => import('./x3d/X3DHamburger.vue'),
  y3d: () => import('./y3d/Y3DHamburger.vue'),
  xy3d: () => import('./xy3d/XY3DHamburger.vue')
}

export default {
  components,
  mixins: [PropsMixins],

  data () {
    return {
      components,
      typeMap: {
        '3dx': 'x3d',
        '3dy': 'y3d',
        '3dxy': 'xy3d'
      }
    }
  },

  computed: {
    computedType () {
      const hamburgerType = this.type.slice(-2) === '-r'
        ? this.type.substring(0, this.type.length - 2)
        : this.type

      return hamburgerType in this.typeMap
        ? this.typeMap[hamburgerType]
        : hamburgerType
    }
  }
}
</script>
