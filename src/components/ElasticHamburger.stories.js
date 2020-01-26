import ElasticHamburger from './ElasticHamburger.vue';

export default { title: 'ElasticHamburger' };

export const Default = () => ({
  components: { ElasticHamburger },
  template: '<elastic-hamburger />',
});

export const Reversed = () => ({
  components: { ElasticHamburger },
  template: '<elastic-hamburger reversed/>',
});
