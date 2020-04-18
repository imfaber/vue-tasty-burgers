<template>
  <component :is="components[computedType]" v-on="$listeners" v-bind="{...$props, ...$attrs}" />
</template>

<script>
import PropsMixins from '../mixins/props-mixin.js'
import ArrowAltHamburger from './arrow-alt/ArrowAltHamburger.vue'
import ArrowHamburger from './arrow/ArrowHamburger.vue'
import ArrowTurnHamburger from './arrow-turn/ArrowTurnHamburger.vue'
import BoringHamburger from './boring/BoringHamburger.vue'
import CollapseHamburger from './collapse/CollapseHamburger.vue'
import ElasticHamburger from './elastic/ElasticHamburger.vue'
import EmphaticHamburger from './emphatic/EmphaticHamburger.vue'
import MinusHamburger from './minus/MinusHamburger.vue'
import SliderHamburger from './slider/SliderHamburger.vue'
import SpinHamburger from './spin/SpinHamburger.vue'
import SpringHamburger from './spring/SpringHamburger.vue'
import SqueezeHamburger from './squeeze/SqueezeHamburger.vue'
import StandHamburger from './stand/StandHamburger.vue'
import VortexHamburger from './vortex/VortexHamburger.vue'
import X3DHamburger from './x3d/X3DHamburger.vue'
import Y3DHamburger from './y3d/Y3DHamburger.vue'
import XY3DHamburger from './xy3d/XY3DHamburger.vue'

const components = {
  arrowalt: ArrowAltHamburger,
  arrow: ArrowHamburger,
  arrowturn: ArrowTurnHamburger,
  boring: BoringHamburger,
  collapse: CollapseHamburger,
  elastic: ElasticHamburger,
  emphatic: EmphaticHamburger,
  minus: MinusHamburger,
  slider: SliderHamburger,
  spin: SpinHamburger,
  spring: SpringHamburger,
  squeeze: SqueezeHamburger,
  stand: StandHamburger,
  vortex: VortexHamburger,
  x3d: X3DHamburger,
  y3d: Y3DHamburger,
  xy3d: XY3DHamburger
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
