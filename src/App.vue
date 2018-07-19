<template>
  <div id="app">
    <NavBox/>
    <TaskColumnBox/>
  </div>
</template>

<script>
import NavBox from '@/components/navigation/NavBox.vue'
import TaskColumnBox from '@/components/TaskColumnBox.vue'

export default {
  name: 'app',
  components: {
    NavBox,
    TaskColumnBox
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
