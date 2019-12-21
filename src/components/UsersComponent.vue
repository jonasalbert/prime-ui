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

      <q-input dense square outlined v-model="searchUser" placeholder="search user">
        <template v-slot:append >
          <q-icon name="search"/>
          <q-icon name="add" style="cursor:pointer;" @click="addUser()" />
        </template>
      </q-input>

    </div>

    <!-- listing -->
    <div  style="width:100%;height:calc(100% - 45px);overflow-y:auto;overflow-x:hidden;margin-top:0px;">

      <div v-for="(item,i) in users" :key="'user'+i"
        animated @click="selectedUser(item)"
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
          <q-icon @click="editUser(item)" name="edit">
            <q-tooltip content-class="bg-purple" content-style="font-size:11px" :offset="[10, 10]">
              Edit
            </q-tooltip>
          </q-icon>
          <q-icon @click="deleteUser(item)"  name="remove">
            <q-tooltip content-class="bg-purple" content-style="font-size:11px" :offset="[10, 10]">
              Delete
            </q-tooltip>
          </q-icon>
        </div>

      </div>
    </div>

    <!-- entry -->
    <div v-if="showEntryUser" style="background-color:white;width:100%;margin-bottom:1px;height:100%;position:absolute;border: 1px solid gray;">

      <div class="q-pa-md">
        <q-input v-model="entryUser.name" label="Usenamer" placeholder="Usenamer" dense />
      </div>

      <!-- buttons entry -->
      <div class="flex row items-center justify-center;" style="background-color:transparent;height:45px; width:90px;position:absolute;right:0;padding:5px 0 5px 0;top:0;">
        <q-btn flat round color="primary" icon="save" @click="saveUser(entryUser)" />
        <q-btn flat round color="primary" icon="clear" @click="closeUser()" />
      </div>

    </div>


  </div>
</template>

<script>

import _ from 'lodash';
import { uid } from 'quasar'

export default {
  name: 'UsersComponent',
  data() {
    return {
      searchUser:'',
      showEntryUser:false,
      modeUser: 1, //1=add, 2=edit
      entryUser:{
        id:uid(),
        name:'',
        selected:0
      }
    }
  },
  methods: {
    selectedUser: function(item) {
      this.$store.commit('users/setSelected',item);
    },
    addUser: function() {
      this.modeUser=1;
      this.showEntryUser = true;
      this.entryUser = {
        id:uid(),
        name:'',
        selected:0
      };
    },
    editUser: function(item) {
      this.modeUser=2;
      this.entryUser = item;
      this.showEntryUser = true;
    },
    closeUser: function() {
      this.showEntryUser = false;
    },
    saveUser: function(item) {
      if (this.modeUser==1) {
        this.$store.commit('users/add', item);
      } else {
        this.$store.commit('users/update', item);
      }

      this.showEntryUser = false;
    },
    deleteUser: function(item) {
      this.$store.commit('users/del', item);
    }
  },
  computed: {
    users: function() {
      const list = this.$store.state.users.list.data;
      const filtered = list.filter(item => item.name.toUpperCase().indexOf(this.searchUser.toUpperCase()) > -1);
      return filtered;
    }
  }
}
</script>
