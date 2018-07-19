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
      columns: [
        {
          name: 'To do',
          key: 'to-do',
          tasks: [
            {name: 'some task', hover: false, editing: false},
            {name: 'another task', hover: false, editing: false},
          ]
        },
        {
          name: 'Doing',
          key: 'doing',
          tasks: [
            {name: 'working on it now', hover: false, editing: false},
          ]
        },
        {
          name: 'Done',
          key: 'done',
          tasks: [
            {name: 'already done task', hover: false, editing: false},
          ]
        }
      ]
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
