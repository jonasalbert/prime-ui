<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>
          Prime
        </q-toolbar-title>

        <q-space/>

        <label>{{featureName}}</label>
        <q-space/>

        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>System's Features</q-item-label>
        <!-- <q-item clickable tag="a" target="_blank" href="https://quasar.dev">
          <q-item-section avatar>
            <q-icon name="vpn_key" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Login</q-item-label>
            <q-item-label caption>Simulation of login credentials.</q-item-label>
          </q-item-section>
        </q-item> -->
        <q-item v-for="(item, i) in resources" :key="'res'+i"  clickable :active="link === item.link" @click="reRoute(item)" active-class="selected-link">
          <q-item-section avatar>
            <q-icon :name="item.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{item.name}}</q-item-label>
            <q-item-label caption>{{item.description}}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

import resources_json from '../statics/data/resources.json'

export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false,
      link: 'UserManagement'
    }
  },
  methods: {
    reRoute: function(item) {
      this.link=item.link;
      this.$store.commit('general/setFeaturesName', item.name)
      this.$router.push({ name:item.routeName });
    }
  },
  computed: {
    resources: function() { return resources_json; },
    featureName: function() {
      return this.$store.state.general.main.featuresName;
    }
  }

}
</script>
