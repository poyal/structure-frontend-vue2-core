import Vue from 'vue';

Vue.filter('sample-filter', (value: string) => {
  return `FILTER_${value}`;
});
