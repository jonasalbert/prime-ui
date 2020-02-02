<template>
  <div :ref="'container_sending'+id" class="row items-start content-start" style="overflow-y:scroll;background-color:transparent;height:100%;width:50%;">
    <div v-for="(item,i) in list" :key="'send'+i" class="column content-start" style="background-color:transparent;height:20px;width:100%;border-bottom: 1px solid #f6f3ed;">
      <div style="background-color:transparent;height:100%;width:110px;">
        <label style="margin-left:10px;">{{item.time}}</label>
      </div>
      <div style="background-color:transparent;height:100%;width:160px;">
        <label style="text-overflow: ellipsis;overflow: hidden;">{{item.msg}}</label>
      </div>
      <div style="background-color:transparent;height:100%;width:70px;">
        <label>{{item.prime_formula}}</label>
      </div>
      <div class="content-center items-center justify-between flex" style="background-color:transparent;height:100%;width:calc(100% - 340px);">
        <label>{{item.status}}</label>
        <q-icon name="check" color="green" />
      </div>
    </div>
    <div style="height:100px;width:100%;"></div>
  </div>
</template>

<script>
export default {
  name: 'SendingComponent',
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
      var container = this.$refs["container_sending"+this.id];
      container.scrollTop = container.scrollHeight;
    },
  },
  computed: {
    list: function() {
      var location = _.find(this.$store.state.sync.list.data, { id: this.id });
      return location.send;
    }
  }
}
</script>

<style>

</style>
