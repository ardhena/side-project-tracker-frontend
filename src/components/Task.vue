<template>
  <div class="task" >{{task.name}}</div>
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
  cursor: grab;
}
</style>
