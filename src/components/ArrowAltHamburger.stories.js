import ArrowAltHamburger from './ArrowAltHamburger.vue';

export default { title: 'ArrowAltHamburger' };

export const Default = () => ({
  components: { ArrowAltHamburger },
  template: '<arrow-alt-hamburger />',
});

export const Reversed = () => ({
  components: { ArrowAltHamburger },
  template: '<arrow-alt-hamburger reversed/>',
});
