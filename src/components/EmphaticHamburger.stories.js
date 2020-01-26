import EmphaticHamburger from './EmphaticHamburger.vue';

export default { title: 'EmphaticHamburger' };

export const Default = () => ({
  components: { EmphaticHamburger },
  template: '<emphatic-hamburger />',
});

export const Reversed = () => ({
  components: { EmphaticHamburger },
  template: '<emphatic-hamburger reversed/>',
});
