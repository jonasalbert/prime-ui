import Vue from 'vue';
import _ from 'lodash';

export function setList(state, value) {
  Vue.set(state.list, 'data', value);
}
export function setIsLoadingList(state, value) {
  Vue.set(state.list, 'isLoading', value);
}
export function setSelected(state, value) {
  let res = _.find(state.list.data, { selected: 1 });
  if (res !== undefined) { res.selected=0 };
  value.selected=1;
  Vue.set(state, 'selected', value);
}
export function add(state, value) {
  let objMax = _.maxBy(state.list.data, function(o) { return o.prime_number; });
  value.prime_number = nextPrime(objMax.prime_number);
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

// Code Reference:
// https://code.sololearn.com/WWfnUlm6K6JR/?ref=app#js
const isPrime = function(n) {
  for (var m = 2; m <= Math.sqrt(n); m++)
      if (n % m === 0)
          return false;
  return true;
};
const nextPrime = function(a) {
  for (var b = a + 1; ; b++)
  if (b === 2 || isPrime(b)) {
      return b;
      break;
  }
}
