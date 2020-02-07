<template>
  <div>
    <q-btn
    :loading="isSending"
    @click="sendRecords()" style="width:170px;" color="primary" :label="'Send 1K records'"/>
  </div>
</template>

<script>

import { uid } from "quasar";
import _ from 'lodash';
import delay from 'delay';

// https://stackoverflow.com/questions/22815790/set-a-delay-timeout-inside-a-double-nested-loop
var delayed = (function() {
  var queue = [];

  function processQueue() {
    if (queue.length > 0) {
      setTimeout(function () {
        queue.shift().cb();
        processQueue();
      }, queue[0].delay);
    }
  }

  return function delayed(delay, cb) {
    queue.push({ delay: delay, cb: cb });

    if (queue.length === 1) {
      processQueue();
    }
  };
}());

export default {
  name: 'SendRowsComponent',
  props: {
    location: { type:Object },
    rows: { type:Number, default:5 }
  },
  data() {
    return {
      excludeLocation:[],
      limit: 9007199254740991,
      tab: 'Main',
      status: [],
      delay:500,
      uid:'',
      sendingTo:false
    }
  },
  methods: {
    isNextPage: function() {
      let selectedPrime = _.find(this.locations, { selected:true });
      let probability = Math.floor(this.limit / Math.log(this.limit));
      return selectedPrime.length > probability;
    },
    sendRecords: function() {
      this.$store.commit('sync/setIsSending', { id:this.location.id, value:true });
      this.sendRows();
    },
    sendRows: async function() {
      this.statusMsg(this.location.id, 'sending ' + this.rows + ' record/s... ',1);

      // prepare the rows....
      for(let i=1; i<=this.rows;i++) {
        this.locations.forEach((loc, l) => {
          delayed(100, () => {
            let prime_formula = this.primeFormula;
            if ((prime_formula % loc.prime_number)==0) {
              this.excludeLocation.push(loc.id);
              this.send(this.location.id, 'record '+ i, prime_formula, 'sending to '+loc.name, uid());
              this.received(loc.id, 'received record '+i, 'from ' + this.location.name, uid());

              if (i===1 && loc.id!==this.location.id) {
                this.statusMsg(loc.id, 'receiving ' + this.rows + ' record/s from ' + this.location.name +'...',1);
              }
              if (i>=this.rows) {
                this.statusMsg(this.location.id, 'sending ' + this.rows + ' record/s successfully to '+loc.name+'.',2);
              }
              if (i>=this.rows && l>0) {
                this.statusMsg(loc.id, 'received ' + this.rows + ' record/s from ' + this.location.name,2);
              }
              if (l+1 >= this.locations.length) {
                this.excludeLocation=[];
              }
            }

          })


        })
      }

      this.$store.commit('sync/setIsSending', { id:this.location.id, value:false });
    },
    statusMsg: function(id, msg, type=0) {
      var dt = new Date();
      var today = dt.toLocaleTimeString();

      var data = { id, value:{
        id:uid, msg:today + ' -> ' + msg, type
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
    primeFormula: function() {
      let loc = JSON.parse(JSON.stringify(_.find(this.$store.state.sync.list.data, { id:this.location.id })));
      let filtered = loc.locations.filter(e => this.excludeLocation.indexOf(e.id) === -1);

      let formula = 1;
      filtered.forEach((item) => {
        if (item.selected && item.id!==this.location.id) {
          formula=formula*item.prime_number;
        }
      })
      return formula;
    },
    primeFormula11: function() {
      var loc = _.find(this.$store.state.sync.list.data, { id:this.location.id });

      let formula = 1;
      loc.locations.forEach((item) => {
        if (item.selected && item.id!==this.location.id) {
          formula=formula*item.prime_number;
        }
      })
      return formula;
    },
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
    },
    forSending: function() {
      var loc = _.find(this.$store.state.sync.list.data, { id:this.location.id });
      return loc.send;
    }
  }
}

</script>

<style>

</style>
