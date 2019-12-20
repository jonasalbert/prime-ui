import Vue from 'vue';

export function setList(state, value) {
  Vue.set(state.list, 'data', value);
}
export function setIsLoadingList(state, value) {
  Vue.set(state.list, 'isLoading', value);
}
