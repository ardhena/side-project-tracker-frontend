<template>
  <div class="column">
    <div class="name">{{column.name}}</div>

    <draggable v-model="tasks"
               :options="{group:'tasks'}"
               class="tasks">
      <Task v-for="(task, index) in column.tasks"
            :task="task"
            :column="column"
            :key="index"/>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import Task from '@/components/project-elements/Task.vue'

export default {
  name: 'Column',
  components: {
    Task,
    draggable
  },
  props: {
    column: Object,
    columnIndex: Number
  },
  computed: {
    tasks: {
      get() {
        let cols = this.$store.state.project.getColumns()
        return cols[this.columnIndex].tasks
      },
      set(tasks) {
        let cols = this.$store.state.project.getColumns()
        let beforeTaskIds = cols[this.columnIndex].tasks.map(task => task.key)

        if (tasks.length > beforeTaskIds.length) {
          let movedTask = tasks.find(function(task) {
            return !beforeTaskIds.includes(task.key)
          })
          this.$store.dispatch('moveTask', {tasks: tasks, column: this.column, task: movedTask})
        } else {
          this.$store.dispatch('moveTask', {tasks: tasks, column: this.column, task: null})
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/sass/variables";

.column {
  width: 350px;
  padding: 10px 20px;

  .name {
    border-bottom: 1px $primary solid;
    padding: 10px;
    text-align: center;
    font-weight: 600;
  }

  .tasks {
    height: 620px;
    overflow: auto;
  }
}
</style>
