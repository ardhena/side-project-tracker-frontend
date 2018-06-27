<template>
  <div class="columns-box">
    <EntryColumn
      v-for="column in columns"
      :column="column"
      :tasks="filterTasks(tasks, column.key)"
      :key="column.key"/>
  </div>
</template>

<script>
import EntryColumn from '@/components/EntryColumn.vue'

export default {
  name: 'ColumnsBox',
  components: {
    EntryColumn
  },
  data: function() {
    return {
      columns: [
        {name: 'To do', hover: false, key: 'to-do'},
        {name: 'Doing', hover: false, key: 'doing'},
        {name: 'Done', hover: false, key: 'done'}
      ],
      tasks: [
        {name: 'some task', column: 'to-do'},
        {name: 'another task', column: 'to-do'},
        {name: 'already done task', column: 'done'},
        {name: 'working on it now', column: 'doing'},
      ]
    }
  },
  methods: {
    filterTasks: function(tasks, key) {
      return tasks.filter(function(task) {
        return task.column === key
      })
    }
  }
}
</script>

<style scoped>
.columns-box {
  display: flex;
  justify-content: center;
}
</style>
