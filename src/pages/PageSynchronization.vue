<style scoped>
  .pad-page {
    padding: 5px;
  }
</style>
<style >
  html, body {
    height:100%;
  }
</style>

<template>
  <q-page class="flex flex-start column pad-page">
    <q-card>
      <q-tabs v-model="tab" align="left" dense no-caps inline-label narrow-indicator>
        <q-tab name="Main" icon="my_location" label="Main">
          <q-badge color="primary" floating>2</q-badge>
        </q-tab>

        <q-tab
          v-show="item.prime_number>2"
          v-for="(item,i) in locations" :key="'location'+i" :name="item.name" icon="my_location" :label="item.name">
          <q-badge color="primary" floating>{{item.prime_number}}</q-badge>
        </q-tab>

      </q-tabs>
      <q-separator />
      <q-tab-panels v-model="tab" animated>

        <q-tab-panel v-for="(item,i) in locations" :key="'loc'+i" :name="item.name" style="height:calc(100vh - 100px);" >
          <div class="flex column" style="width:100%;background-color:white;height:100%;border: 1px solid gray;">
            <div style="background-color:white;height:100%;width:200px;border-right: 1px solid gray;border-bottom: 1px solid gray;text-align:center;padding-top:10px;">

              <LocationsComponent :id="item.id" />
              <SendRowsComponent v-if="item.id==1" :location="item" :rows="50" />

            </div>
            <div class="column" style="background-color:transparent;height:100%;width:calc(100% - 200px);border-bottom: 1px solid gray;">
              <div class="row" style="background-color:transparent;height:50%;width:100%;">
                <SendingComponent :id="item.id"/>
                <ReceivingComponent :id="item.id"/>
              </div>
              <div style="background-color:transparent;height:50%;width:100%;">
                <StatusMessageComponent :id="item.id"/>
              </div>
            </div>
          </div>
        </q-tab-panel>

      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script>

// javascript highest integer value: 9007199254740991
// https://stackoverflow.com/questions/307179/what-is-javascripts-highest-integer-value-that-a-number-can-go-to-without-losin

import RenderOperationsComponent from '../components/RenderOperationsComponent';
import SendingComponent from '../components/SendingComponent';
import ReceivingComponent from '../components/ReceivingComponent';
import StatusMessageComponent from '../components/StatusMessageComponent';
import SendRowsComponent from '../components/SendRowsComponent';
import LocationsComponent from '../components/LocationsComponent';
import { uid } from "quasar";

export default {
  name: 'PageSynchronization',
  components: {
    RenderOperationsComponent,
    SendingComponent,
    ReceivingComponent,
    StatusMessageComponent,
    SendRowsComponent,
    LocationsComponent
  },
  data() {
    return {
      tab: 'Main'
    }
  },
  computed: {
    locations: function() {
      return this.$store.state.locations.list.data;
    }
  }

}
</script>
