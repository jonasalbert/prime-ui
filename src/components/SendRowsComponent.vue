<template>
  <div>
    <q-btn
    :loading="isSending"
    @click="sendRecords(rows)" style="width:170px;" color="primary" label="Send 1K records"/>
  </div>
</template>

<script>

import { uid } from "quasar";
import _ from 'lodash';

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
      delay:200,
      uid:''
    }
  },
  methods: {
    myLoop: function() {
      setTimeout(() => {
        if (this.i<this.rows) {
          this.i++;

          var formula = 210;
          this.uid = uid();
          this.locations.forEach((item) => {
            this.send(this.location.id, 'sending record '+this.i, 210, this.location.name + ' to ' + item.name, this.uid);
          });


          this.myLoop();
        } else {
          this.$store.commit('sync/setIsSending', { id:this.location.id, value:false });
        }
      },this.delay);
    },
    sendRecords: function(rows) {
      this.$store.commit('sync/setIsSending', { id:this.location.id, value:true });
      this.i=0;
      this.rows=rows
      this.myLoop();
    },
    send: function(id, msg, prime_formula, status, uid) {
      var dt = new Date();
      // var today = dt.getFullYear() + '-' + dt.getMonth()+1 + '-' + dt.getDate() + ' ' + dt.toLocaleTimeString();
      var today = dt.toLocaleTimeString();

      var data = { id, value:{
        id:uid, time:today + ' ->', msg,  prime_formula, status
      }};

      var location = _.find(this.$store.state.sync.list.data, { id:this.location.id });
      var found = location.send.findIndex(o => o.id===uid);
      this.$store.commit('sync/send', data);
      // if (found===-1) {
      //   this.$store.commit('sync/send', data);
      // } else {
      //   this.$store.commit('sync/sendReplace', data);
      // }

    }
  },
  computed: {
    isSending: function() {
      var location = _.find(this.$store.state.sync.list.data, { id:this.location.id });
      return location.isSending;
    },
    locations: function() {
      var loc = _.find(this.$store.state.sync.list.data, { id:this.location.id });
      return loc.locations;
    }
  }
}

</script>

<style>

</style>
