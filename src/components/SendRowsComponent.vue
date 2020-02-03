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
      delay:500,
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

          setTimeout(() => {
            this.locations.forEach((item) => {
              this.send(this.location.id, 'sending record '+this.i, 210, this.location.name + ' to ' + item.name, this.uid);
              this.received(item.id, 'received record '+this.i, 'from ' + this.location.name, this.uid);
              this.statusMsg(this.location.id, 'sending record '+this.i + ' to ' + item.name);
            });
          },100);

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
    statusMsg: function(id, msg) {
      var dt = new Date();
      var today = dt.toLocaleTimeString();

      var data = { id, value:{
        id:uid, msg:today + ' ->', msg
      }};
      this.$store.commit('sync/status', data);
    },
    received: function(id, msg, status, uid) {
      var dt = new Date();
      var today = dt.toLocaleTimeString();

      var data = { id, value:{
        id:uid, time:today + ' ->', msg,  prime_formula:1, status
      }};
      this.$store.commit('sync/received', data);
    },
    send: function(id, msg, prime_formula, status, uid) {
      var dt = new Date();
      var today = dt.toLocaleTimeString();

      var data = { id, value:{
        id:uid, time:today + ' ->', msg,  prime_formula, status
      }};
      // this.$store.commit('sync/send', data);

      var location = _.find(this.$store.state.sync.list.data, { id:this.location.id });
      var found = location.send.findIndex(o => o.id===uid);
      if (found===-1) {
        this.$store.commit('sync/send', data);
      } else {
        this.$store.commit('sync/sendReplace', data);
      }
    }
  },
  computed: {
    datetime: function() {
      return dt.getFullYear() + '-' + dt.getMonth()+1 + '-' + dt.getDate() + ' ' + dt.toLocaleTimeString();
    },
    time: function() {
      return dt.toLocaleTimeString();
    },
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
