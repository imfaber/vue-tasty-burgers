<template>
    <button type="button" class="hamburger"
            :class="[isActive ? 'is-active' : '', burgerTypeClass]"
            @click.prevent="toggle">
        <span class="hamburger-box" :style="buttonStyle">
          <span class="hamburger-inner" :style="layerStyle">
              <span class="hamburger-inner__before" :style="layerStyle"></span>
              <span class="hamburger-inner__after" :style="layerStyle"></span>
          </span>
        </span>
    </button>
</template>

<script>

  export default {
    props: {
      type:        {
        type:    String,
        default: 'boring',
      },
      active:      {
        type:    Boolean,
        default: false,
      },
      color:       {
        type:    String,
        default: '#000000',
      },
      activeColor: {
        type:    String,
        default: null,
      },
      size:        {
        type:      String,
        validator: function (value) {
          return ['xs', 's', 'm', 'l', 'xl'].indexOf(value) !== -1
        },
        default:   'm',
      },
    },

    data () {
      return {
        burgerTypeClass: null,
        isActive:        null,
      }
    },

    created: function () {
      this.burgerTypeClass = `hamburger--${this.type}`
      this.isActive = this.active
      this._activeColor = this.activeColor || this.color;

      switch (this.size) {
        case 'xs':
          this.buttonStyle = {
            transform: 'scale(0.5)',
            width:     '20px',
            height:    '13px',
          }
          break;
        case 's':
          this.buttonStyle = {
            transform: 'scale(0.7)',
            width:     '29px',
            height:    '18px',
          }
          break;
        case 'm':
          this.buttonStyle = {
            transform: 'scale(0.9)',
            width:     '36px',
            height:    '23px',
          }
          break;
        case 'l':
          this.buttonStyle = {
            transform: 'scale(1.1)',
            width:       '44px',
            height:      '27px',
          }
          break;
        case 'xl':
          this.buttonStyle = {
            transform: 'scale(1.3)',
            width:       '52px',
            height:      '32px',
          }
          break;
      }
    },

    computed: {
      layerStyle: function () {
        return {
          'background-color': (this.isActive) ? this._activeColor : this.color,
        }
      },
    },

    methods: {
      toggle (e) {
        this.isActive = !this.isActive
        this.$emit('toggle', this.isActive)
      },
    },

    watch: {
      active (newValue, oldValue) {
        if (newValue !== oldValue) {
          this.isActive = value
          this.$emit('toggle', newValue)
        }
      },
    },
  }
</script>

<style>
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

    .hamburger-box {
        width: 40px;
        height: 24px;
        display: block;
        position: relative;
        transform-origin: top left;
    }

    .hamburger-inner {
        display: block;
        top: 50%;
        margin-top: -2px;
    }

    .hamburger-inner, .hamburger-inner__before, .hamburger-inner__after {
        width: 40px;
        height: 4px;
        background-color: #000;
        border-radius: 4px;
        position: absolute;
        transition-property: transform;
        transition-duration: 0.15s;
        transition-timing-function: ease;
    }

    .hamburger-inner__before, .hamburger-inner__after {
        content: "";
        display: block;
    }

    .hamburger-inner__before {
        top: -10px;
    }

    .hamburger-inner__after {
        bottom: -10px;
    }

    /*
       * 3DX
       */
    .hamburger--3dx .hamburger-box {
        perspective: 80px;
    }

    .hamburger--3dx .hamburger-inner {
        transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    .hamburger--3dx .hamburger-inner__before, .hamburger--3dx .hamburger-inner__after {
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
        transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    .hamburger--3dx-r .hamburger-inner__before, .hamburger--3dx-r .hamburger-inner__after {
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

    /*
       * 3DY
       */
    .hamburger--3dy .hamburger-box {
        perspective: 80px;
    }

    .hamburger--3dy .hamburger-inner {
        transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    .hamburger--3dy .hamburger-inner__before, .hamburger--3dy .hamburger-inner__after {
        transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    .hamburger--3dy.is-active .hamburger-inner {
        background-color: transparent !important;
        transform: rotateX(-180deg);
    }

    .hamburger--3dy.is-active .hamburger-inner__before {
        transform: translate3d(0, 10px, 0) rotate(45deg);
    }

    .hamburger--3dy.is-active .hamburger-inner__after {
        transform: translate3d(0, -10px, 0) rotate(-45deg);
    }

    /*
       * 3DY Reverse
       */
    .hamburger--3dy-r .hamburger-box {
        perspective: 80px;
    }

    .hamburger--3dy-r .hamburger-inner {
        transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    .hamburger--3dy-r .hamburger-inner__before, .hamburger--3dy-r .hamburger-inner__after {
        transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    .hamburger--3dy-r.is-active .hamburger-inner {
        background-color: transparent !important;
        transform: rotateX(180deg);
    }

    .hamburger--3dy-r.is-active .hamburger-inner__before {
        transform: translate3d(0, 10px, 0) rotate(45deg);
    }

    .hamburger--3dy-r.is-active .hamburger-inner__after {
        transform: translate3d(0, -10px, 0) rotate(-45deg);
    }

    /*
       * 3DXY
       */
    .hamburger--3dxy .hamburger-box {
        perspective: 80px;
    }

    .hamburger--3dxy .hamburger-inner {
        transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    .hamburger--3dxy .hamburger-inner__before, .hamburger--3dxy .hamburger-inner__after {
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
        transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    .hamburger--3dxy-r .hamburger-inner__before, .hamburger--3dxy-r .hamburger-inner__after {
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

    /*
       * Arrow
       */
    .hamburger--arrow.is-active .hamburger-inner__before {
        transform: translate3d(-8px, 0, 0) rotate(-45deg) scale(0.7, 1);
    }

    .hamburger--arrow.is-active .hamburger-inner__after {
        transform: translate3d(-8px, 0, 0) rotate(45deg) scale(0.7, 1);
    }

    /*
       * Arrow Right
       */
    .hamburger--arrow-r.is-active .hamburger-inner__before {
        transform: translate3d(8px, 0, 0) rotate(45deg) scale(0.7, 1);
    }

    .hamburger--arrow-r.is-active .hamburger-inner__after {
        transform: translate3d(8px, 0, 0) rotate(-45deg) scale(0.7, 1);
    }

    /*
       * Arrow Alt
       */
    .hamburger--arrowalt .hamburger-inner__before {
        transition: top 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    .hamburger--arrowalt .hamburger-inner__after {
        transition: bottom 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    .hamburger--arrowalt.is-active .hamburger-inner__before {
        top: 0;
        transform: translate3d(-8px, -10px, 0) rotate(-45deg) scale(0.7, 1);
        transition: top 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);
    }

    .hamburger--arrowalt.is-active .hamburger-inner__after {
        bottom: 0;
        transform: translate3d(-8px, 10px, 0) rotate(45deg) scale(0.7, 1);
        transition: bottom 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);
    }

    /*
       * Arrow Alt Right
       */
    .hamburger--arrowalt-r .hamburger-inner__before {
        transition: top 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    .hamburger--arrowalt-r .hamburger-inner__after {
        transition: bottom 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    .hamburger--arrowalt-r.is-active .hamburger-inner__before {
        top: 0;
        transform: translate3d(8px, -10px, 0) rotate(45deg) scale(0.7, 1);
        transition: top 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);
    }

    .hamburger--arrowalt-r.is-active .hamburger-inner__after {
        bottom: 0;
        transform: translate3d(8px, 10px, 0) rotate(-45deg) scale(0.7, 1);
        transition: bottom 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);
    }

    /*
     * Arrow Turn
     */
    .hamburger--arrowturn.is-active .hamburger-inner {
        transform: rotate(-180deg);
    }

    .hamburger--arrowturn.is-active .hamburger-inner__before {
        transform: translate3d(8px, 0, 0) rotate(45deg) scale(0.7, 1);
    }

    .hamburger--arrowturn.is-active .hamburger-inner__after {
        transform: translate3d(8px, 0, 0) rotate(-45deg) scale(0.7, 1);
    }

    /*
     * Arrow Turn Right
     */
    .hamburger--arrowturn-r.is-active .hamburger-inner {
        transform: rotate(-180deg);
    }

    .hamburger--arrowturn-r.is-active .hamburger-inner__before {
        transform: translate3d(-8px, 0, 0) rotate(-45deg) scale(0.7, 1);
    }

    .hamburger--arrowturn-r.is-active .hamburger-inner__after {
        transform: translate3d(-8px, 0, 0) rotate(45deg) scale(0.7, 1);
    }

    /*
       * Boring
       */
    .hamburger--boring .hamburger-inner, .hamburger--boring .hamburger-inner__before, .hamburger--boring .hamburger-inner__after {
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

    /*
       * Collapse
       */
    .hamburger--collapse .hamburger-inner {
        top: auto;
        bottom: 0;
        transition-duration: 0.13s;
        transition-delay: 0.13s;
        transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }

    .hamburger--collapse .hamburger-inner__after {
        top: -20px;
        transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0.1s linear;
    }

    .hamburger--collapse .hamburger-inner__before {
        transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }

    .hamburger--collapse.is-active .hamburger-inner {
        transform: translate3d(0, -10px, 0) rotate(-45deg);
        transition-delay: 0.22s;
        transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    .hamburger--collapse.is-active .hamburger-inner__after {
        top: 0;
        opacity: 0;
        transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0.1s 0.22s linear;
    }

    .hamburger--collapse.is-active .hamburger-inner__before {
        top: 0;
        transform: rotate(-90deg);
        transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    /*
       * Collapse Reverse
       */
    .hamburger--collapse-r .hamburger-inner {
        top: auto;
        bottom: 0;
        transition-duration: 0.13s;
        transition-delay: 0.13s;
        transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }

    .hamburger--collapse-r .hamburger-inner__after {
        top: -20px;
        transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0.1s linear;
    }

    .hamburger--collapse-r .hamburger-inner__before {
        transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }

    .hamburger--collapse-r.is-active .hamburger-inner {
        transform: translate3d(0, -10px, 0) rotate(45deg);
        transition-delay: 0.22s;
        transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    .hamburger--collapse-r.is-active .hamburger-inner__after {
        top: 0;
        opacity: 0;
        transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0.1s 0.22s linear;
    }

    .hamburger--collapse-r.is-active .hamburger-inner__before {
        top: 0;
        transform: rotate(90deg);
        transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    /*
       * Elastic
       */
    .hamburger--elastic .hamburger-inner {
        top: 2px;
        transition-duration: 0.275s;
        transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    .hamburger--elastic .hamburger-inner__before {
        top: 10px;
        transition: opacity 0.125s 0.275s ease;
    }

    .hamburger--elastic .hamburger-inner__after {
        top: 20px;
        transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    .hamburger--elastic.is-active .hamburger-inner {
        transform: translate3d(0, 10px, 0) rotate(135deg);
        transition-delay: 0.075s;
    }

    .hamburger--elastic.is-active .hamburger-inner__before {
        transition-delay: 0s;
        opacity: 0;
    }

    .hamburger--elastic.is-active .hamburger-inner__after {
        transform: translate3d(0, -20px, 0) rotate(-270deg);
        transition-delay: 0.075s;
    }

    /*
       * Elastic Reverse
       */
    .hamburger--elastic-r .hamburger-inner {
        top: 2px;
        transition-duration: 0.275s;
        transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    .hamburger--elastic-r .hamburger-inner__before {
        top: 10px;
        transition: opacity 0.125s 0.275s ease;
    }

    .hamburger--elastic-r .hamburger-inner__after {
        top: 20px;
        transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    .hamburger--elastic-r.is-active .hamburger-inner {
        transform: translate3d(0, 10px, 0) rotate(-135deg);
        transition-delay: 0.075s;
    }

    .hamburger--elastic-r.is-active .hamburger-inner__before {
        transition-delay: 0s;
        opacity: 0;
    }

    .hamburger--elastic-r.is-active .hamburger-inner__after {
        transform: translate3d(0, -20px, 0) rotate(270deg);
        transition-delay: 0.075s;
    }

    /*
       * Emphatic
       */
    .hamburger--emphatic {
        overflow: hidden;
    }

    .hamburger--emphatic .hamburger-inner {
        transition: background-color 0.125s 0.175s ease-in;
    }

    .hamburger--emphatic .hamburger-inner__before {
        left: 0;
        transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, left 0.125s 0.175s ease-in;
    }

    .hamburger--emphatic .hamburger-inner__after {
        top: 10px;
        right: 0;
        transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, right 0.125s 0.175s ease-in;
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
        transition: left 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    .hamburger--emphatic.is-active .hamburger-inner__after {
        right: -80px;
        top: -80px;
        transform: translate3d(-80px, 80px, 0) rotate(-45deg);
        transition: right 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    /*
       * Emphatic Reverse
       */
    .hamburger--emphatic-r {
        overflow: hidden;
    }

    .hamburger--emphatic-r .hamburger-inner {
        transition: background-color 0.125s 0.175s ease-in;
    }

    .hamburger--emphatic-r .hamburger-inner__before {
        left: 0;
        transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, left 0.125s 0.175s ease-in;
    }

    .hamburger--emphatic-r .hamburger-inner__after {
        top: 10px;
        right: 0;
        transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, right 0.125s 0.175s ease-in;
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
        transition: left 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    .hamburger--emphatic-r.is-active .hamburger-inner__after {
        right: -80px;
        top: 80px;
        transform: translate3d(-80px, -80px, 0) rotate(45deg);
        transition: right 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    /*
       * Minus
       */
    .hamburger--minus .hamburger-inner__before, .hamburger--minus .hamburger-inner__after {
        transition: bottom 0.08s 0s ease-out, top 0.08s 0s ease-out, opacity 0s linear;
    }

    .hamburger--minus.is-active .hamburger-inner__before, .hamburger--minus.is-active .hamburger-inner__after {
        opacity: 0;
        transition: bottom 0.08s ease-out, top 0.08s ease-out, opacity 0s 0.08s linear;
    }

    .hamburger--minus.is-active .hamburger-inner__before {
        top: 0;
    }

    .hamburger--minus.is-active .hamburger-inner__after {
        bottom: 0;
    }

    /*
       * Slider
       */
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

    /*
       * Spin
       */
    .hamburger--spin .hamburger-inner {
        transition-duration: 0.22s;
        transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }

    .hamburger--spin .hamburger-inner__before {
        transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;
    }

    .hamburger--spin .hamburger-inner__after {
        transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }

    .hamburger--spin.is-active .hamburger-inner {
        transform: rotate(225deg);
        transition-delay: 0.12s;
        transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    .hamburger--spin.is-active .hamburger-inner__before {
        top: 0;
        opacity: 0;
        transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;
    }

    .hamburger--spin.is-active .hamburger-inner__after {
        bottom: 0;
        transform: rotate(-90deg);
        transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    /*
       * Spin Reverse
       */
    .hamburger--spin-r .hamburger-inner {
        transition-duration: 0.22s;
        transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }

    .hamburger--spin-r .hamburger-inner__before {
        transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;
    }

    .hamburger--spin-r .hamburger-inner__after {
        transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }

    .hamburger--spin-r.is-active .hamburger-inner {
        transform: rotate(-225deg);
        transition-delay: 0.12s;
        transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    .hamburger--spin-r.is-active .hamburger-inner__before {
        top: 0;
        opacity: 0;
        transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;
    }

    .hamburger--spin-r.is-active .hamburger-inner__after {
        bottom: 0;
        transform: rotate(90deg);
        transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    /*
       * Spring
       */
    .hamburger--spring .hamburger-inner {
        top: 2px;
        transition: background-color 0s 0.13s linear;
    }

    .hamburger--spring .hamburger-inner__before {
        top: 10px;
        transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }

    .hamburger--spring .hamburger-inner__after {
        top: 20px;
        transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }

    .hamburger--spring.is-active .hamburger-inner {
        transition-delay: 0.22s;
        background-color: transparent !important;
    }

    .hamburger--spring.is-active .hamburger-inner__before {
        top: 0;
        transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);
        transform: translate3d(0, 10px, 0) rotate(45deg);
    }

    .hamburger--spring.is-active .hamburger-inner__after {
        top: 0;
        transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);
        transform: translate3d(0, 10px, 0) rotate(-45deg);
    }

    /*
       * Spring Reverse
       */
    .hamburger--spring-r .hamburger-inner {
        top: auto;
        bottom: 0;
        transition-duration: 0.13s;
        transition-delay: 0s;
        transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }

    .hamburger--spring-r .hamburger-inner__after {
        top: -20px;
        transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0s linear;
    }

    .hamburger--spring-r .hamburger-inner__before {
        transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }

    .hamburger--spring-r.is-active .hamburger-inner {
        transform: translate3d(0, -10px, 0) rotate(-45deg);
        transition-delay: 0.22s;
        transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    .hamburger--spring-r.is-active .hamburger-inner__after {
        top: 0;
        opacity: 0;
        transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0s 0.22s linear;
    }

    .hamburger--spring-r.is-active .hamburger-inner__before {
        top: 0;
        transform: rotate(90deg);
        transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    /*
       * Stand
       */
    .hamburger--stand .hamburger-inner {
        transition: transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19), background-color 0s 0.075s linear;
    }

    .hamburger--stand .hamburger-inner__before {
        transition: top 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }

    .hamburger--stand .hamburger-inner__after {
        transition: bottom 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }

    .hamburger--stand.is-active .hamburger-inner {
        transform: rotate(90deg);
        background-color: transparent !important;
        transition: transform 0.075s 0s cubic-bezier(0.215, 0.61, 0.355, 1), background-color 0s 0.15s linear;
    }

    .hamburger--stand.is-active .hamburger-inner__before {
        top: 0;
        transform: rotate(-45deg);
        transition: top 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    .hamburger--stand.is-active .hamburger-inner__after {
        bottom: 0;
        transform: rotate(45deg);
        transition: bottom 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    /*
       * Stand Reverse
       */
    .hamburger--stand-r .hamburger-inner {
        transition: transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19), background-color 0s 0.075s linear;
    }

    .hamburger--stand-r .hamburger-inner__before {
        transition: top 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }

    .hamburger--stand-r .hamburger-inner__after {
        transition: bottom 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }

    .hamburger--stand-r.is-active .hamburger-inner {
        transform: rotate(-90deg);
        background-color: transparent !important;
        transition: transform 0.075s 0s cubic-bezier(0.215, 0.61, 0.355, 1), background-color 0s 0.15s linear;
    }

    .hamburger--stand-r.is-active .hamburger-inner__before {
        top: 0;
        transform: rotate(-45deg);
        transition: top 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    .hamburger--stand-r.is-active .hamburger-inner__after {
        bottom: 0;
        transform: rotate(45deg);
        transition: bottom 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    /*
       * Squeeze
       */
    .hamburger--squeeze .hamburger-inner {
        transition-duration: 0.075s;
        transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }

    .hamburger--squeeze .hamburger-inner__before {
        transition: top 0.075s 0.12s ease, opacity 0.075s ease;
    }

    .hamburger--squeeze .hamburger-inner__after {
        transition: bottom 0.075s 0.12s ease, transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }

    .hamburger--squeeze.is-active .hamburger-inner {
        transform: rotate(45deg);
        transition-delay: 0.12s;
        transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    .hamburger--squeeze.is-active .hamburger-inner__before {
        top: 0;
        opacity: 0;
        transition: top 0.075s ease, opacity 0.075s 0.12s ease;
    }

    .hamburger--squeeze.is-active .hamburger-inner__after {
        bottom: 0;
        transform: rotate(-90deg);
        transition: bottom 0.075s ease, transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    /*
       * Vortex
       */
    .hamburger--vortex .hamburger-inner {
        transition-duration: 0.2s;
        transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
    }

    .hamburger--vortex .hamburger-inner__before, .hamburger--vortex .hamburger-inner__after {
        transition-duration: 0s;
        transition-delay: 0.1s;
        transition-timing-function: linear;
    }

    .hamburger--vortex .hamburger-inner__before {
        transition-property: top, opacity;
    }

    .hamburger--vortex .hamburger-inner__after {
        transition-property: bottom, transform;
    }

    .hamburger--vortex.is-active .hamburger-inner {
        transform: rotate(765deg);
        transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
    }

    .hamburger--vortex.is-active .hamburger-inner__before, .hamburger--vortex.is-active .hamburger-inner__after {
        transition-delay: 0s;
    }

    .hamburger--vortex.is-active .hamburger-inner__before {
        top: 0;
        opacity: 0;
    }

    .hamburger--vortex.is-active .hamburger-inner__after {
        bottom: 0;
        transform: rotate(90deg);
    }

    /*
       * Vortex Reverse
       */
    .hamburger--vortex-r .hamburger-inner {
        transition-duration: 0.2s;
        transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
    }

    .hamburger--vortex-r .hamburger-inner__before, .hamburger--vortex-r .hamburger-inner__after {
        transition-duration: 0s;
        transition-delay: 0.1s;
        transition-timing-function: linear;
    }

    .hamburger--vortex-r .hamburger-inner__before {
        transition-property: top, opacity;
    }

    .hamburger--vortex-r .hamburger-inner__after {
        transition-property: bottom, transform;
    }

    .hamburger--vortex-r.is-active .hamburger-inner {
        transform: rotate(-765deg);
        transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
    }

    .hamburger--vortex-r.is-active .hamburger-inner__before, .hamburger--vortex-r.is-active .hamburger-inner__after {
        transition-delay: 0s;
    }

    .hamburger--vortex-r.is-active .hamburger-inner__before {
        top: 0;
        opacity: 0;
    }

    .hamburger--vortex-r.is-active .hamburger-inner__after {
        bottom: 0;
        transform: rotate(-90deg);
    }
</style>