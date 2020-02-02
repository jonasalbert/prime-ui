import Vue from 'vue';
import _ from 'lodash';

export function setListLocations(state, value) {
  Vue.set(state.list, 'data', value);
}
