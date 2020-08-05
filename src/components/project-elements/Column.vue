<template>
  <div class="column">
    <div class="name">
      <PlusButton @click="newTaskTop"/>
      {{column.name}}
      <PlusButton @click="newTaskBottom"/>
    </div>

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
import PlusButton from '@/components/buttons/PlusButton.vue'

export default {
  name: 'Column',
  components: {
    Task,
    draggable,
    PlusButton
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
  },
  methods: {
    newTaskTop: function() {
      this.$store.dispatch('newTask', {position: 'top', column_key: this.column.key})
    },
    newTaskBottom: function() {
      this.$store.dispatch('newTask', {position: 'bottom', column_key: this.column.key})
    },
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/sass/variables";

.column {
  width: 400px;
  padding: 10px;

  .name {
    border-bottom: 2px $secondary-light solid;
    padding: 10px;
    text-align: center;
    font-weight: 600;
  }

  .tasks {
    min-height: 30vh;
    max-height: 68vh;
    overflow: auto;
    padding: 0 25px;
  }
}
</style>
