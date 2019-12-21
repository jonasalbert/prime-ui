export function someMutation (/* state */) {
}
import Vue from 'vue';
import _ from 'lodash';

export function setList(state, value) {
  Vue.set(state.list, 'data', value);
}
export function setIsLoadingList(state, value) {
  Vue.set(state.list, 'isLoading', value);
}
export function setSelected(state, value) {
  console.log('setSelected value...', value);
  let res = _.find(state.list.data, { selected: 1 });
  console.log('setSelected...', res);
  if (res !== undefined) {
    res.selected=0;
  }
  value.selected=1;
  console.log('setSelected value...', value);
  Vue.set(state, 'selected', value);
}
export function add(state, value) {
  state.list.data.push(value);
}
export function del(state, value) {
  let index = state.list.data.findIndex(o => o.id === value.id);
  state.list.data.splice(index, 1);
}
export function update(state, value) {
  console.log('update...', value);
  let index = state.list.data.findIndex(o => o.id === value.id);
  state.list.data.splice(index, 1, value);
}

