<style scoped>
  .pad-page {
    padding: 5px;
  }
  .selected {
    background-color:#cce8ff;
  }
</style>

<template>
  <div>
    <!-- {{permissions}} -->
    <!-- {{columns}} -->
    <q-table
      dense
      :data="permissions"
      :columns="columns"
      hide-bottom
      row-key="id"
    >
      <q-tr slot="body" slot-scope="props" :props="props">
        <q-td key="resources_id" :props="props">{{ props.row.resources_id }}</q-td>
        <q-td key="name" :props="props">{{ props.row.name }}</q-td>
        <q-td key="prime_formula_operations" :props="props">{{ props.row.prime_formula_operations }}</q-td>
        <q-td v-for="(operation,i) in props.row.operations" :key="'operation'+i">
          <q-checkbox :value="(props.row.prime_formula_operations % operation.prime_number ==0 )"/>
        </q-td>
      </q-tr>

    </q-table>
  </div>

</template>

<script>

import _ from 'lodash';
import { uid } from 'quasar'


export default {
  name: 'PermissionUserComponent',
  data() {
    return {
      searchPermission:'',
      filteredPermissions:[],
      leftJoinPermission:[],
      columnss: [
        { name: 'resources_id', label: '#', align: 'left', field: 'resources_id',style: 'width: 40px;' },
        { name: 'name', label: 'Resource', align: 'left', field: 'name',style: 'width:80px;' },
        { name: 'prime_formula_operations', label: 'Prime Formula', align: 'left', field: 'prime_formula_operations' },
      ],
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

      // code reference: https://stackoverflow.com/questions/35903850/combine-json-arrays-by-key-javascript
      let leftJoinPermission = _(filteredPermissions)
                              .concat(this.resources)
                              .groupBy('resources_id')
                              .map(_.spread(_.assign))
                              .value();


      var withOperations = _.map(leftJoinPermission, o => _.extend({ operations:this.operations }, o));
      let result = _.map(withOperations, _.partialRight(_.pick,['resources_id', 'prime_formula_operations','name','operations']))
      console.log('withActions...',result);
      console.log('columns...',this.columns);

      this.$store.commit('permissions/setUsersPermissions', result);
    }
  },
  computed: {
    columns: function() {
      // { name: 'resources_id', label: '#', align: 'left', field: 'resources_id',style: 'width: 40px;' },
      let keys = [{ name:'resources_id'}, {name:'name'}, {name:'prime_formula_operations'}];
      let operations_keys = _.map(this.operations, _.partialRight(_.pick,['name']))
      let merge = [...keys,...operations_keys];
      let refinedKeys = _.map(merge, o => _.extend({
        label: (o.name=='resources_id'?'#':o.name),
        align: 'left',
        'field': o.name,
        style: 'width:auto;'
      }, o));
      let result = _.map(refinedKeys, _.partialRight(_.pick,['style', 'align','label','name','field']))
      console.log('result...',result)
      console.log('refinedKeys...',refinedKeys)
      return refinedKeys;
    },
    resources: function() {
      return this.$store.state.resources.list.data;
    },
    operations: function() {
      let list = _.orderBy(this.$store.state.operations.list.data,['id'],['asc']);
      return list;
    },
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
