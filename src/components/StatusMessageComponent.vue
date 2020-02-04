<template>
  <div :ref="'container_status'+id" style="overflow-y:scroll;background-color:black;height:100%;width:100%;">
    <div v-for="(item, i) in list" :key="'msg'+i" style="background-color:black;height:20px;width:100%;">
      <label style="color:white;padding-left:10px;">{{item.msg}}</label>
    </div>
    <div style="height:50px;width:100%;"></div>
  </div>
</template>

<script>
export default {
  name: 'StatusMessageComponent',
  props: {
    id: { type:Number }
  },
  watch: {
    list: function() {
      this.scrollToEnd();
    }
  },
  methods: {
  	scrollToEnd: function() {
      var container = this.$refs["container_status"+this.id];
      container.scrollTop = container.scrollHeight;
    },
  },
  computed: {
    list: function() {
      var location = _.find(this.$store.state.sync.list.data, { id: this.id });
      return location.status;
    }
  }
}
</script>

<style>

</style>
