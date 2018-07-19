<template>
  <div id="app">
    <NavBox :columns="columns"/>
    <TaskColumnBox :columns="columns"/>
  </div>
</template>

<script>
import NavBox from '@/components/NavBox.vue'
import TaskColumnBox from '@/components/TaskColumnBox.vue'

export default {
  name: 'app',
  components: {
    NavBox,
    TaskColumnBox
  },
  data: function() {
    return {
      columns: this.$store.state.columns
    }
  }
}
</script>

<style lang="scss">
@import "assets/sass/variables";

body {
  color: $black;
  background-color: $white;
  margin: 0;
  padding: 0;
  font-family: $font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
