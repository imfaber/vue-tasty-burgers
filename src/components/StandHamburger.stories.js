import StandHamburger from './StandHamburger.vue';

export default { title: 'StandHamburger' };

export const Default = () => ({
  components: { StandHamburger },
  template: '<stand-hamburger />',
});

export const Reversed = () => ({
  components: { StandHamburger },
  template: '<stand-hamburger reversed/>',
});
