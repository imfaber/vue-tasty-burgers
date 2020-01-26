import X3DHamburger from './X3DHamburger.vue';

export default { title: 'X3DHamburger' };

export const Default = () => ({
  components: { X3DHamburger },
  template: '<x-3-d-hamburger />',
});

export const Reversed = () => ({
  components: { X3DHamburger },
  template: '<x-3-d-hamburger reversed/>',
});
