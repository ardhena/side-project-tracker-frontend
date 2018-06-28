<template>
  <div class="box">
    <TaskColumn
        v-for="column in columns"
        :column="column"
        :key="column.key"/>
  </div>
</template>

<script>
import TaskColumn from '@/components/TaskColumn.vue'

export default {
  name: 'TaskColumnBox',
  components: {
    TaskColumn
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

<style scoped>
.box {
  display: flex;
  justify-content: center;
}
</style>
