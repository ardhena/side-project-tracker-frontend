<template>
  <div class="task"
       :class="task.hover ? 'highlighted' : ''"
       @mouseover="task.hover = true"
       @mouseleave="task.hover = false">
    <div class="text" v-show="!task.editing">
      <span class="name"
            @click="task.editing = true">
        {{task.name}}
      </span>
      <div class="buttons">
        <button class="edit"
              @click="task.editing = true">
          Edit
        </button>
        <button class="delete"
              @click="deleteTask">
          Delete
        </button>
      </div>
    </div>
    <div v-show="task.editing" class="text-input">
      <input class="content"
             placeholder="New task"
             v-model="task.name"
             @keyup.enter="task.editing = false"/>
      <div class="buttons">
        <button class="close"
              @click="task.editing = false">
          OK
        </button>
        <button class="delete"
              @click="deleteTask">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Task',
  props: {
    task: Object,
    column: Object
  },
  methods: {
    deleteTask: function() {
      let deletedTask = this.task
      let newTasks = this.column.tasks.filter(function(task) {
        return task.name != deletedTask.name
      })
      this.column.tasks = newTasks
    }
  }
}
</script>

<style scoped lang="scss">
.task {
  display: flex;
  flex-direction: column;
  margin: 15px 0;
  padding: 20px;
  background-color: rgba(179, 169, 198, 0.3);
  border: 1px transparent solid;
  cursor: move;

  &.highlighted {
    background-color: rgba(179, 169, 198, 0.6);
    border: 1px #ac91e2 solid;
  }

  .text {
    display: inline-flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .name {
      cursor: text;
      width: auto;
    }
  }

  .text-input {
    display: inline-flex;
    flex-direction: row;
    justify-content: space-between;

    .content {
      background-color: #fbfbfb;
      border: 1px #b3a9c6 solid;
      width: calc(100% - 50px);
      padding: 0 5px;
    }
  }

  .buttons {
    display: inline-flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .text-input .close, .text-input .delete, .text .edit, .text .delete {
    background-color: #fbfbfb;
    border: 1px #b3a9c6 solid;
    padding: 5px;
    cursor: pointer;
    margin: 0 3px;
  }
}
</style>
