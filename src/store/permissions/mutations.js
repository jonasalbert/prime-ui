import Vue from 'vue';
import _ from 'lodash';

export function setListUsers(state, value) {
  Vue.set(state.users,'data',value);
}
export function setListUsersRoles(state, value) {
  Vue.set(state.users_roles,'data',value);
}
export function setListRoles(state, value) {
  Vue.set(state.roles,'data',value);
}
export function setUsersPermissions(state, value) {
  Vue.set(state.users,'permissions',value);
}
export function saveUsers(state, {id, prime_formula_operations}) {
  let index = state.users.data.findIndex(o => o.id === id);
  let data = state.users.data[index];
  data.prime_formula_operations=prime_formula_operations;
  console.log('saveUsers new value...',data)
  state.users.data.splice(index, 1, data);
}
