import Vue from 'vue';

export function setFeaturesName(state, value) {
  Vue.set(state.main, 'featuresName', value);
}
