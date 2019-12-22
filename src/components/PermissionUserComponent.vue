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

      <q-input dense square outlined v-model="searchPermission" placeholder="search permission">
        <template v-slot:append >
          <q-icon name="search"/>
          <!-- <q-icon name="add" style="cursor:pointer;" @click="addUser()" /> -->
        </template>
      </q-input>

    </div>

    <!-- listing -->
    <div  style="width:100%;height:calc(100% - 45px);overflow-y:auto;overflow-x:hidden;margin-top:0px;">
      <!-- header -->
      <div
        style="background-color:#e0dfdf;height:5vh;width:100%;margin-bottom:1px;position:relative;clear: both;">

        <!-- ctr -->
        <div class="flex items-center justify-center" style="background-color:transparent;height:100%;width:35px;float:left;">
          <label for="">#</label>
        </div>

        <!-- name -->
        <div class="flex items-center justify-first" style="background-color:transparent;height:100%;width:calc(100% - 85px);float:left;">
          <label for="">Resource</label>
        </div>

      </div>

      <div v-for="(item,i) in permissions" :key="'user'+i"
        animated @click="selectedUser(item)"
        class="flex row items-center justify-first"
        :style="{ backgroundColor: item.selected ? '#cce8ff':'white'}"
        style="height:5vh;width:100%;margin-bottom:1px;position:relative;clear: both;">

        <!-- ctr -->
        <div class="flex items-center justify-center" style="background-color:transparent;height:100%;width:35px;float:left;">
          <label for="">{{i+1}}</label>
        </div>

        <!-- name -->
        <div class="flex items-center justify-first" style="background-color:transparent;height:100%;width:calc(100% - 85px);float:left;">
          <label for="">{{item.name}}</label>
        </div>


      </div>
    </div>




  </div>
</template>

<script>

import _ from 'lodash';
import { uid } from 'quasar'


// code reference:
// https://stackoverflow.com/questions/54228609/how-to-merge-the-key-value-pairs-of-two-json-arrays-javascript?fbclid=IwAR2OX3JDkJLUEhsMBUsVzM0R74ts0AgdYNwIFR3mIHmZXX_-uvvohrZnt9c
const leftJoin = (many, one, key) => {
  return Object.values(
    [].concat(many, one)
    .reduce((dict, item) => {
      var value = dict[item[key]] || {}
      value = Object.assign({} , value, item)
      dict[item[key]] = value
      return dict
    }, {}));
}

export default {
  name: 'PermissionUserComponent',
  data() {
    return {
      searchPermission:'',
      filteredPermissions:[],
      leftJoinPermission:[]
    }
  },
  watch: {
    selectedUser: function(user) {
      this.getPermissions(user.id);
    }
  },
  methods: {
    getPermissions: function(id) {
      let filteredPermissions = _.filter(this.$store.state.permissions.users.data, item => item.users_id==id);
      let leftJoinPermission = leftJoin(this.filteredPermissions, this.$store.state.resources.list.data,'resources_id');
      this.$store.commit('permissions/setUsersPermissions', leftJoinPermission);
    }
  },
  computed: {
    permissions: function() {
      return this.$store.state.permissions.users.permissions;
    },
    selectedUser: function() {
      let user = this.$store.state.users.selected;
      return user;
    }
  }
}
</script>
