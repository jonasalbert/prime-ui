<style scoped>
  .pad-page {
    padding: 5px;
  }
</style>

<template>
  <div class="flex pad-page" style="background-color:#fbf3f3;height:100%;width:100%;">
    <q-input dense square outlined v-model="searchUser" placeholder="search user" style="background-color:white;width: calc(100% - 42px);margin-bottom:1px;position:absolute;">
      <template v-slot:append>
        <q-icon name="search" />
        <q-icon name="add" />
      </template>
    </q-input>
    <div style="width:100%;height:calc(100% - 45px);overflow-y:auto;overflow-x:hidden;margin-top:45px;">
      <!-- {{users}} -->
      <div v-for="(item,i) in 1" :key="'user'+i" clas="flex row items-center justify-center" style="background-color:white;height:5vh;width:100%;margin-bottom:1px;position:relative;">

<!-- <label for="">1</label>
<label for="">2</label> -->
        <!-- ctr -->
        <div style="background-color:green;height:100%;width:35px;">
        </div>
        <div style="background-color:red;height:100%;width:35px;">
        </div>

        <!-- <div style="background-color:green;height:100%;width:calc(100% - 70px);">
        </div> -->

        <!-- buttons -->
        <!-- <div class="flex justify-evenly items-center" style="background-color:orange;position:absolute;right:5px;cursor:pointer;height:100%;width:50px;">
          <q-icon name="remove">
            <q-tooltip content-class="bg-purple" content-style="font-size:11px" :offset="[10, 10]">
              Delete
            </q-tooltip>
          </q-icon>
          <q-icon name="edit">
            <q-tooltip content-class="bg-purple" content-style="font-size:11px" :offset="[10, 10]">
              Edit
            </q-tooltip>
          </q-icon>
        </div> -->

      </div>
    </div>

  </div>
</template>

<script>

import users_json from '../statics/data/users.json';

export default {
  name: 'UsersComponent',
  data() {
    return {
      searchUser:''
    }
  },
  computed: {
    users: function() {
      let list = this.$store.state.users.list.data;
      if (list==null) {
        this.$store.commit('users/setList', users_json)
      }
      return list==null ? users_json:list;
    }
  }
}
</script>
