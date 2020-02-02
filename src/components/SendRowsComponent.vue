<template>
  <q-btn @click="sendRecords(rows)" style="width:170px;" color="primary" label="Send 1K records"/>
</template>

<script>

import { uid } from "quasar";

export default {
  name: 'SendRowsComponent',
  props: {
    location: { type:Object },
    rows: { type:Number, default:5 }
  },
  data() {
    return {
      tab: 'Main',
      status: [],
      i:1,
      delay:200
    }
  },
  methods: {
    myLoop: function() {
      setTimeout(() => {
        if (this.i<=this.rows) {

          this.sendTo(
            location.id,

          )

          this.i++;
          this.myLoop();
        }
      },this.delay);
    },
    sendRecords: function(rows) {
      this.i=0;
      this.rows=rows
      this.myLoop();
    },
    sendTo: function(id, msg, prime_formula, status) {
      var dt = new Date();
      var today = dt.getFullYear() + '-' +
                  dt.getMonth()+1 + '-' +
                  dt.getDate() + ' ' +
                  dt.toLocaleTimeString();

      var data = { id, value:{
        id:uid(), time:today + ' ->', msg,  prime_formula, status
      }};

      this.$store.commit('sync/addReceived', data);
    }
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
