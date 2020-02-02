import Vue from "vue";
import _ from "lodash";
import { uid } from "quasar";

export function addReceived(state, {id, value}) {
  var location = _.find(state.list.data, { id });
  console.log('addReceived id....', id)
  console.log('addReceived value....', value)
  console.log('addReceived find....', location)
  location.received.push(value);
  console.log('addReceived....', location)
}
