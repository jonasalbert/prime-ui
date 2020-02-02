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
        <!-- <q-tab name="roles" icon="group" label="Roles" /> -->
        <!-- <q-tab name="resources" icon="multiline_chart" label="Resources" /> -->
        <q-tab name="operations" icon="post_add" label="Operations" />
      </q-tabs>
      <q-separator />
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="users" style="height:75vh;">
          <div class="" style="height:100%;">
            <div style="float:left;width:300px;background-color:blue;height:100%;">
              <UsersComponent/>
            </div>
            <div class="" style="float:left;width:calc(100% - 300px);height:100%;">
              <PermissionUserComponent/>
              <!-- <div style="height:50%;width:100%;padding:0 5px 0 5px;">
              </div>
              <div style="height:50%;width:100%;">
              </div> -->
            </div>
          </div>
        </q-tab-panel>
        <!-- <q-tab-panel name="roles" style="height:75vh;">
          <div style="width:400px;background-color:blue;height:100%;">
            <RolesComponent/>
          </div>
        </q-tab-panel> -->
        <!-- <q-tab-panel name="resources" style="height:75vh;">
          <div style="width:400px;background-color:blue;height:100%;">
            <ResourcesComponent/>
          </div>
        </q-tab-panel> -->
        <q-tab-panel name="operations" style="height:75vh;">
          <div style="width:400px;background-color:blue;height:100%;">
            <OperationsComponent/>
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>

  </q-page>
</template>

<script>

import UsersComponent from '../components/UsersComponent';
import RolesComponent from '../components/RolesComponent';
import ResourcesComponent from '../components/ResourcesComponent';
import OperationsComponent from '../components/OperationsComponent';
import PermissionUserComponent from '../components/PermissionUserComponent';

export default {
  name: 'PageUserManagement',
  components: {
    UsersComponent,
    RolesComponent,
    ResourcesComponent,
    OperationsComponent,
    PermissionUserComponent
  },
  data() {
    return {
      tab:'users'
    }
  }
}
</script>
