<style scoped>
  .pad-page {
    padding: 5px;
  }
</style>

<template>
  <q-page class="flex flex-start column pad-page">
    <RenderOperationsComponent :resources_id="5"/>
  </q-page>
</template>

<script>

import RenderOperationsComponent from '../components/RenderOperationsComponent';

export default {
  name: 'PagePayslip',
  components: {
    RenderOperationsComponent
  }
}
</script>
