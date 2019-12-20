import Vue from 'vue';

export function setFeaturesName(state, value) {
  console.log('setFeaturesName...', value);
  Vue.set(state.main, 'featuresName', value);
}
