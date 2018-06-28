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
