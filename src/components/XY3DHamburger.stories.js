import XY3DHamburger from './XY3DHamburger.vue';

export default { title: 'XY3DHamburger' };

export const Default = () => ({
  components: { XY3DHamburger },
  template: '<x-y-3-d-hamburger />',
});

export const Reversed = () => ({
  components: { XY3DHamburger },
  template: '<x-y-3-d-hamburger reversed/>',
});
