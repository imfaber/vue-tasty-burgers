import ArrowHamburger from './ArrowHamburger.vue';

export default { title: 'ArrowHamburger' };

export const Default = () => ({
  components: { ArrowHamburger },
  template: '<arrow-hamburger />',
});

export const Reversed = () => ({
  components: { ArrowHamburger },
  template: '<arrow-hamburger reversed/>',
});
