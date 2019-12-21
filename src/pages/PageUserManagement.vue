<style scoped>
  .pad-page {
    padding: 5px;
  }
</style>

<template>
  <q-page class="flex flex-start column pad-page">

    <q-card>
      <q-tabs v-model="tab" align="left" dense no-caps inline-label narrow-indicator>
        <q-tab name="users" icon="person" label="Users" />
        <q-tab name="roles" icon="group" label="Roles" />
        <q-tab name="resources" icon="multiline_chart" label="Resources" />
        <q-tab name="operations" icon="post_add" label="Operations" />
      </q-tabs>
      <q-separator />
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="users" style="height:75vh;">
          <div style="width:400px;background-color:blue;height:100%;">
            <UsersComponent/>
          </div>
        </q-tab-panel>
        <q-tab-panel name="roles" style="height:75vh;">
          <div style="width:400px;background-color:blue;height:100%;">
            <RolesComponent/>
          </div>
        </q-tab-panel>
        <q-tab-panel name="resources" style="height:75vh;">
          resources
        </q-tab-panel>
        <q-tab-panel name="operations" style="height:75vh;">
          operations
        </q-tab-panel>
      </q-tab-panels>
    </q-card>


  </q-page>
</template>

<script>

import UsersComponent from '../components/UsersComponent';
import RolesComponent from '../components/RolesComponent';

export default {
  name: 'PageUserManagement',
  components: {
    UsersComponent, RolesComponent
  },
  data() {
    return {
      tab:'users'
    }
  }
}
</script>
