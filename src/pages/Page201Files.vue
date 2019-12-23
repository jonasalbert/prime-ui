<style scoped>
  .pad-page {
    padding: 5px;
  }
</style>

<template>
  <q-page class="flex flex-start column pad-page">
    <RenderOperationsComponent :resources_id="3"/>
  </q-page>
</template>

<script>

import RenderOperationsComponent from '../components/RenderOperationsComponent';

export default {
  name: 'Page201Files',
  components: {
    RenderOperationsComponent
  }
}
</script>
