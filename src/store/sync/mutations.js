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
  let index = location.send.findIndex(o => o.id === value.id);
  location.send.splice(index, 1, value);
}
export function status(state, {id, value}) {
  var location = _.find(state.list.data, { id });
  location.status.push(value);
}
export function setIsSending(state,{ id, value }) {
  var location = _.find(state.list.data, { id });
  location.isSending=value;
}
export function selectedLocation(state, {id,value}) {
  // console.log('selectedLocation id...', id);
  // var loc = _.find(state.list.data, { id:id });
  // let index = loc.locations.findIndex(o => o.id === value.id);
  // loc.locations.splice(index, 1, value);
  // console.log('selectedLocation index...', index);

  console.log('selectedLocation value...', value);
  var list = _.find(state.list.data, { id });
  list.locations=value;
  console.log('selectedLocation list data...', state.list.data);
}
