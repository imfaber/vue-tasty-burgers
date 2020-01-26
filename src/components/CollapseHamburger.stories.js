import CollapseHamburger from './CollapseHamburger.vue';

export default { title: 'CollapseHamburger' };

export const Default = () => ({
  components: { CollapseHamburger },
  template: '<collapse-hamburger />',
});

export const Reversed = () => ({
  components: { CollapseHamburger },
  template: '<collapse-hamburger reversed/>',
});
