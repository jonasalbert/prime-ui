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

      <q-input dense square outlined v-model="searchRole" placeholder="search Role">
        <template v-slot:append >
          <q-icon name="search"/>
          <q-icon name="add" style="cursor:pointer;" @click="addRole()" />
        </template>
      </q-input>

    </div>

    <!-- listing -->
    <div  style="width:100%;height:calc(100% - 45px);overflow-y:auto;overflow-x:hidden;margin-top:0px;">

      <div v-for="(item,i) in roles" :key="'role'+i"
        animated @click="selectedRole(item)"
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
          <q-icon @click="editRole(item)" name="edit">
            <q-tooltip content-class="bg-purple" content-style="font-size:11px" :offset="[10, 10]">
              Edit
            </q-tooltip>
          </q-icon>
          <q-icon @click="deleteRole(item)"  name="remove">
            <q-tooltip content-class="bg-purple" content-style="font-size:11px" :offset="[10, 10]">
              Delete
            </q-tooltip>
          </q-icon>
        </div>

      </div>
    </div>

    <!-- entry -->
    <div v-if="showEntryRole" style="background-color:white;width:100%;margin-bottom:1px;height:100%;position:absolute;border: 1px solid gray;">

      <div class="q-pa-md">
        <q-input v-model="entryRole.name" label="Usenamer" placeholder="Usenamer" dense />
      </div>
{{entryRole}}

      <!-- buttons entry -->
      <div class="flex row items-center justify-center;" style="background-color:transparent;height:45px; width:90px;position:absolute;right:0;padding:5px 0 5px 0;top:0;">
        <q-btn flat round color="primary" icon="save" @click="saveRole(entryRole)" />
        <q-btn flat round color="primary" icon="clear" @click="closeRole()" />
      </div>

    </div>


  </div>
</template>

<script>

import Roles_json from '../statics/data/roles.json';
import _ from 'lodash';
import { uid } from 'quasar'

export default {
  name: 'RolesComponent',
  data() {
    return {
      searchRole:'',
      showEntryRole:false,
      modeRole: 1, //1=add, 2=edit
      entryRole:{
        id:uid(),
        name:'',
        selected:0
      }
    }
  },
  methods: {
    selectedRole: function(item) {
      this.$store.commit('roles/setSelected',item);
    },
    addRole: function() {
      this.modeRole=1;
      this.showEntryRole = true;
      this.entryRole = {
        id:uid(),
        name:'',
        selected:0
      };
    },
    editRole: function(item) {
      this.modeRole=2;
      this.entryRole = item;
      this.showEntryRole = true;
    },
    closeRole: function() {
      this.showEntryRole = false;
    },
    saveRole: function(item) {
      if (this.modeRole==1) {
        this.$store.commit('roles/add', item);
      } else {
        this.$store.commit('roles/update', item);
      }

      this.showEntryRole = false;
    },
    deleteRole: function(item) {
      this.$store.commit('roles/del', item);
    }
  },
  computed: {
    roles: function() {
      // let list = JSON.parse(JSON.stringify(this.$store.state.roles.list.data));
      let list =this.$store.state.roles.list.data;
      return list;
    }
  }
}
</script>
