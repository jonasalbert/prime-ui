<style scoped>
  .pad-page {
    padding: 5px;
  }
  .selected {
    background-color:#cce8ff;
  }
</style>

<template>
  <div class="flex pad-page1" style="background-color:#f7f7f7;height:100%;width:100%;position:relative;">

    <!-- search -->
    <div  style="background-color:transparent;width:100%;margin-bottom:1px;height:45px;position:relative;">

      <q-input dense square outlined v-model="searchOperation" placeholder="search Operation">
        <template v-slot:append >
          <q-icon name="search"/>
          <q-icon name="add" style="cursor:pointer;" @click="addOperation()" />
        </template>
      </q-input>

    </div>

    <!-- listing -->
    <div  style="width:100%;height:calc(100% - 45px);overflow-y:auto;overflow-x:hidden;margin-top:0px;">

      <div v-for="(item,i) in operations" :key="'operation'+i"
        animated @click="selectedOperation(item)"
        class="flex row items-center justify-center"
        :style="{ backgroundColor: item.selected ? '#cce8ff':'white'}"
        style="height:5vh;width:100%;margin-bottom:1px;position:relative;clear: both;">

        <!-- ctr -->
        <div class="flex items-center justify-center" style="background-color:transparent;height:100%;width:35px;float:left;">
          <label for="">{{i+1}}</label>
        </div>

        <!-- name -->
        <div class="flex items-center justify-first" style="background-color:transparent;height:100%;width:calc(100% - 155px);float:left;">
          <label for="">{{item.name}}</label>
        </div>

        <!-- prime_number -->
        <div class="flex items-center justify-center" style="background-color:transparent;height:100%;width:35px;float:right;">
          <label for="">{{item.prime_number}}</label>
        </div>

        <!-- buttons -->
        <div class="flex justify-evenly items-center" style="background-color:transparent;height:100%;width:50px;float:right;cursor:pointer;">
          <q-icon @click="editOperation(item)" name="edit">
            <q-tooltip content-class="bg-purple" content-style="font-size:11px" :offset="[10, 10]">
              Edit
            </q-tooltip>
          </q-icon>
          <q-icon @click="deleteOperation(item)"  name="remove">
            <q-tooltip content-class="bg-purple" content-style="font-size:11px" :offset="[10, 10]">
              Delete
            </q-tooltip>
          </q-icon>
        </div>

      </div>
    </div>

    <!-- entry -->
    <div v-if="showEntryOperation" style="background-color:white;width:100%;margin-bottom:1px;height:100%;position:absolute;border: 1px solid gray;">

      <div class="q-pa-md">
        <q-input v-model="entryOperation.name" label="Operation" placeholder="Operation" dense />
      </div>

      <!-- buttons entry -->
      <div class="flex row items-center justify-center;" style="background-color:transparent;height:45px; width:90px;position:absolute;right:0;padding:5px 0 5px 0;top:0;">
        <q-btn flat round color="primary" icon="save" @click="saveOperation(entryOperation)" />
        <q-btn flat round color="primary" icon="clear" @click="closeOperation()" />
      </div>

    </div>


  </div>
</template>

<script>

import _ from 'lodash';
import { uid } from 'quasar'

export default {
  name: 'OperationsComponent',
  data() {
    return {
      searchOperation:'',
      showEntryOperation:false,
      modeOperation: 1, //1=add, 2=edit
      entryOperation:{
        id:uid(),
        name:'',
        selected:0,
        prime_number:1
      }
    }
  },
  methods: {
    selectedOperation: function(item) {
      this.$store.commit('operations/setSelected',item);
    },
    addOperation: function() {
      this.modeOperation=1;
      this.showEntryOperation = true;
      this.entryOperation = {
        id:uid(),
        name:'',
        selected:0
      };
    },
    editOperation: function(item) {
      this.modeOperation=2;
      this.entryOperation = item;
      this.showEntryOperation = true;
    },
    closeOperation: function() {
      this.showEntryOperation = false;
    },
    saveOperation: function(item) {
      if (this.modeOperation==1) {
        this.$store.commit('operations/add', item);
      } else {
        this.$store.commit('operations/update', item);
      }

      this.showEntryOperation = false;
    },
    deleteOperation: function(item) {
      this.$store.commit('operations/del', item);
    }
  },
  computed: {
    operations: function() {
      const list = this.$store.state.operations.list.data;
      const filtered = list.filter(item => item.name.toUpperCase().indexOf(this.searchOperation.toUpperCase()) > -1);
      return filtered;
    }
  }
}
</script>
