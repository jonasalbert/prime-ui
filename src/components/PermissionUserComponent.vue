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
          <input @click="savePermission(props.row, props.row.operations, operation)" name="'name'+i" type="checkbox" v-model="operation.checked"  >
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
    savePermission: function(resource, operations, operation) {
      console.log('resource...', resource);
      console.log('operations...', operations);
      console.log('operation...', operation);
      let checkedOperations = _.filter(operations, item => item.checked==true);
      checkedOperations.push(operation)

      let prime_formula_operations = 1;
      checkedOperations.forEach((item) => {
        prime_formula_operations=prime_formula_operations*item.prime_number;
      });
      console.log('prime_formula_operations...', prime_formula_operations);
      resource.prime_formula_operations=prime_formula_operations;
      this.$store.commit('permissions/saveUsers', { id:resource.id ,prime_formula_operations });
      this.getPermissions(this.selectedUser.id);

    },
    getPermissions: function(id) {
      // filter the permission by userid.
      let filteredPermissions = _.filter(this.$store.state.permissions.users.data, item => item.users_id==id);

      // left join code reference: https://stackoverflow.com/questions/35903850/combine-json-arrays-by-key-javascript
      let leftJoinPermission = _(filteredPermissions)
                              .concat(this.resources)
                              .groupBy('resources_id')
                              .map(_.spread(_.assign))
                              .value();

      let per=[];
      leftJoinPermission.forEach((item) => {
        let ops = _.map(this.operations, o => _.extend({ prime_formula_operations:item.prime_formula_operations }, o));
        let operationsCheck = { operations: _.map(ops, o => _.extend({ checked: (o.prime_formula_operations%o.prime_number==0) }, o)) };
        let ext = { ...item,...operationsCheck};
        per.push(ext);
      });

      let result = _.map(per, _.partialRight(_.pick,['resources_id', 'prime_formula_operations','name','operations','id',]))

      this.$store.commit('permissions/setUsersPermissions', result);
    }
  },
  computed: {
    columns: function() {
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
      let result = JSON.parse(JSON.stringify(this.$store.state.permissions.users.permissions));
      return result;
    },
    selectedUser: function() {
      let user = this.$store.state.users.selected;
      return user;
    }
  }
}
</script>
