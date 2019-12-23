<style scope>
  .btn-fixed-width {
    width: 200px;
    margin-bottom: 4px;
  }
</style>

<template>
  <div class="flex column" style="height:100%;width:100%;">
    <!-- {{permissions[0].operations}} -->
    <q-btn
      v-for="(btn, i) in permissions[0].operations"
      v-if="Boolean(btn.checked)"
      class="btn-fixed-width"
      :key="'btn'+i"
      color="primary"
      :label="btn.name" />
  </div>
</template>

<script>

export default {
  name: 'RenderOperationsComponent',
  props: {
    resources_id:Number
  },
  created() {
  },
  methods: {

  },
  computed: {
    selectedUser: function() {
      let user = this.$store.state.users.selected;
      return user;
    },
    permissions: function() {
      let result = JSON.parse(JSON.stringify(this.$store.state.permissions.users.permissions));
      let filtered = _.filter(result,{ resources_id:this.resources_id });
      console.log('permissions...', filtered);
      return filtered;
    },

  }
}

</script>
