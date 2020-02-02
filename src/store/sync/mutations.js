import Vue from "vue";
import _ from "lodash";
import { uid } from "quasar";

export function received(state, {id, value}) {
  var location = _.find(state.list.data, { id });
  location.received.push(value);
}
export function send(state, {id, value}) {
  var location = _.find(state.list.data, { id });
  location.send.push(value);
}
export function sendReplace(state, {id, value}) {
  var location = _.find(state.list.data, { id });
  console.log('sendReplace location...',location)
  let index = location.send.findIndex(o => o.id === value.id);
  location.send.splice(index, 1, value);
}
