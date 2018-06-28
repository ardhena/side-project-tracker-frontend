<template>
  <div class="entry-column">
    <div class="name">{{column.name}}</div>

    <draggable v-model="column.tasks" :options="{group:'tasks'}" class="tasks">
      <Task
        v-for="(task, index) in column.tasks"
        :task="task"
        :key="index"/>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import Task from '@/components/Task.vue'

export default {
  name: 'EntryColumn',
  components: {
    Task,
    draggable
  },
  props: {
    column: Object
  }
}
</script>

<style scoped>
.entry-column {
  margin: 20px 0;
  width: 350px;
  height: 600px;
  padding: 10px 20px;
}
.entry-column .name {
  border-bottom: 1px #b3a9c6 solid;
  padding: 10px;
  text-align: center;
  font-weight: 600;
}

.tasks {
  height: 500px;
}
</style>
