<style scoped>
  .pad-page {
    padding: 5px;
  }
  .selected {
    background-color:#d0cece;
  }
</style>

<template>
  <div class="flex pad-page1" style="background-color:#f7f7f7;height:100%;width:100%;position:relative;">

    <!-- search -->
    <div  style="background-color:transparent;width:100%;margin-bottom:1px;height:45px;position:relative;">

      <q-input dense square outlined v-model="searchResource" placeholder="search Resource">
        <template v-slot:append >
          <q-icon name="search"/>
          <q-icon name="add" style="cursor:pointer;" @click="addResource()" />
        </template>
      </q-input>

    </div>

    <!-- listing -->
    <div  style="width:100%;height:calc(100% - 45px);overflow-y:auto;overflow-x:hidden;margin-top:0px;">

      <div v-for="(item,i) in resources" :key="'resource'+i"
        animated @click="selectedResource(item)"
        class="flex row items-center justify-center"
        :style="{ backgroundColor: item.selected ? '#d0cece':'white'}"
        style="height:5vh;width:100%;margin-bottom:1px;position:relative;clear: both;">

        <!-- ctr -->
        <div class="flex items-center justify-center" style="background-color:transparent;height:100%;width:35px;float:left;">
          <label for="">{{i+1}}</label>
        </div>

        <!-- selected -->
        <div class="flex items-center justify-center" style="background-color:transparent;height:100%;width:35px;float:left;">
          <label for="">{{item.selected}}</label>
        </div>

        <!-- name -->
        <div class="flex items-center justify-first" style="background-color:transparent;height:100%;width:calc(100% - 120px);float:left;">
          <label for="">{{item.name}}</label>
        </div>

        <!-- buttons -->
        <div class="flex justify-evenly items-center" style="background-color:transparent;height:100%;width:50px;float:right;cursor:pointer;">
          <q-icon @click="editResource(item)" name="edit">
            <q-tooltip content-class="bg-purple" content-style="font-size:11px" :offset="[10, 10]">
              Edit
            </q-tooltip>
          </q-icon>
          <q-icon @click="deleteResource(item)"  name="remove">
            <q-tooltip content-class="bg-purple" content-style="font-size:11px" :offset="[10, 10]">
              Delete
            </q-tooltip>
          </q-icon>
        </div>

      </div>
    </div>

    <!-- entry -->
    <div v-if="showEntryResource" style="background-color:white;width:100%;margin-bottom:1px;height:100%;position:absolute;border: 1px solid gray;">

      <div class="q-pa-md">
        <q-input v-model="entryResource.name" label="Usenamer" placeholder="Usenamer" dense />
      </div>

      <!-- buttons entry -->
      <div class="flex row items-center justify-center;" style="background-color:transparent;height:45px; width:90px;position:absolute;right:0;padding:5px 0 5px 0;top:0;">
        <q-btn flat round color="primary" icon="save" @click="saveResource(entryResource)" />
        <q-btn flat round color="primary" icon="clear" @click="closeResource()" />
      </div>

    </div>


  </div>
</template>

<script>

import _ from 'lodash';
import { uid } from 'quasar'

export default {
  name: 'ResourcesComponent',
  data() {
    return {
      searchResource:'',
      showEntryResource:false,
      modeResource: 1, //1=add, 2=edit
      entryResource:{
        id:uid(),
        name:'',
        selected:0
      }
    }
  },
  methods: {
    selectedResource: function(item) {
      this.$store.commit('resources/setSelected',item);
    },
    addResource: function() {
      this.modeResource=1;
      this.showEntryResource = true;
      this.entryResource = {
        id:uid(),
        name:'',
        selected:0
      };
    },
    editResource: function(item) {
      this.modeResource=2;
      this.entryResource = item;
      this.showEntryResource = true;
    },
    closeResource: function() {
      this.showEntryResource = false;
    },
    saveResource: function(item) {
      if (this.modeResource==1) {
        this.$store.commit('resources/add', item);
      } else {
        this.$store.commit('resources/update', item);
      }

      this.showEntryResource = false;
    },
    deleteResource: function(item) {
      this.$store.commit('resources/del', item);
    }
  },
  computed: {
    resources: function() {
      const list = this.$store.state.resources.list.data;
      const filtered = list.filter(item => item.name.toUpperCase().indexOf(this.searchResource.toUpperCase()) > -1);
      return filtered;
    }
  }
}
</script>
