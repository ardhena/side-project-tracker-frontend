<template>
  <div id="app">
    <NavBox/>
    <TaskColumnBox/>
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
  }
}
</script>

<style>
body {
  color: #2c2a30;
  background-color: #fbfbfb;
  margin: 0;
  padding: 0;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
