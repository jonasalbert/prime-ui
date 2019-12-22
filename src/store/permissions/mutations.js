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
