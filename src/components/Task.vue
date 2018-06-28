<template>
  <div class="task"
       :class="task.hover ? 'highlighted' : ''"
       @mouseover="task.hover = true"
       @mouseleave="task.hover = false">
    {{task.name}}
  </div>
</template>

<script>
export default {
  name: 'Task',
  props: {
    task: Object
  }
}
</script>

<style scoped>
.task {
  display: flex;
  flex-direction: column;
  margin: 15px 0;
  padding: 20px;
  background-color: rgba(179, 169, 198, 0.3);
  border: 1px transparent solid;
  cursor: grab;
}
.task.highlighted {
  background-color: rgba(179, 169, 198, 0.6);
  border: 1px #ac91e2 solid;
}
</style>
