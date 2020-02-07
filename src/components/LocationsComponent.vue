<template>
  <div style="width:100%;padding:10px 0 10px 20px;">
    <div v-show="chk.id!==id"
      v-for="(chk,i) in myLocations" :key="'sendTo'+i"
      style="background-color:transparent;padding-bottom:5px;position:relative;"
      class="flex rows justify-start items-center content-center" >

      <input
        @change="updateSelected(chk)"
        type="checkbox"
        :value="chk.id"
        v-model="chk.selected"
        :id="'loc'+chk.name+chk.id">
      <label :for="'loc'+chk.name+chk.id">{{chk.name}}</label>
      <label style="position:absolute;right:10px;" :for="'loc'+chk.name+chk.id">{{chk.prime_number}}</label>
    </div>
    {{primeFormula}}
  </div>
</template>

<script>

import { uid } from "quasar";

export default {
  name: 'LocationsComponent',
  props: {
    id: { type:Number }
  },
  data() {
    return {
      checkedLocations:[],
      myLocations: [
        { "id": 1, "prime_number": 2, "name": "Main", "selected":true },
        { "id": 2, "prime_number": 3, "name": "Manila", "selected":true },
        { "id": 3, "prime_number": 5, "name": "Cebu", "selected":true },
        { "id": 4, "prime_number": 7, "name": "Davao", "selected":true }
      ]
    }
  },
  methods: {
    updateSelected: function(value) {
      this.$store.commit('sync/selectedLocation', {id:this.id, value:this.myLocations});
    }
  },
  computed: {
    primeFormula: function() {
      var loc = _.find(this.$store.state.sync.list.data, { id:this.id });

      let formula = 1;
      loc.locations.forEach((item) => {
        if (item.selected && item.id!==this.id) {
          formula=formula*item.prime_number;
        }
      })
      return formula;
    },
    primeFormula1: function() {
      let formula = 1;
      this.myLocations.forEach((item) => {
        if (item.selected && item.id!==this.id) {
          formula=formula*item.prime_number;
        }
      })
      return formula;
    },
    locations: function() {
      var notIn = function(loc) {
        return _.findIndex([{id:this.id}], {'id': loc.id}) === -1;
      }
      var filtered = _.filter(this.myLocations, notIn);
    }

    // locations: function() {
    //   console.log('computed locations id....', this.id)
    //   var loc = _.find(this.$store.state.sync.list.data, { id:this.id });
    //   console.log('computed locations....', loc.locations)
    //   console.log('whole...',this.$store.state.sync.list.data)
    //   return loc.locations;
    // }
  }

}

</script>

<style>

</style>
