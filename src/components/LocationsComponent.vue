<template>
  <div style="width:100%;padding:10px 0 10px 20px;">
    <div v-show="chk.id!==id"
      v-for="(chk,i) in locations" :key="'sendTo'+i"
      style="background-color:transparent;padding-bottom:5px;" class="flex rows justify-start items-center content-center" >
      <input type="checkbox" :checked="chk.selected" :id="'loc'+chk.name">
      <label :for="'loc'+chk.name">{{chk.name}}</label>
    </div>
  </div>
</template>

<script>

import { uid } from "quasar";

export default {
  name: 'LocationsComponent',
  props: {
    id: { type:Number }
  },
  computed: {
    locations: function() {
      return this.$store.state.locations.list.data;
    }
  }
}

</script>

<style>

</style>
