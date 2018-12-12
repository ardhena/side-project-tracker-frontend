<template>
  <div class="task"
       :class="hover ? 'highlighted' : ''"
       @mouseover="mouseOverTask"
       @mouseleave="mouseLeaveTask">
    <div class="text" v-show="!editing">
      <span class="name"
            @click="editTask">
        {{task.name}}
      </span>
      <div class="buttons">
        <button class="edit"
              @click="editTask">
          Edit
        </button>
        <button class="delete"
              @click="deleteTask">
          Delete
        </button>
      </div>
    </div>
    <div v-show="editing" class="text-input">
      <input class="content"
             placeholder="New task"
             v-model="task.name"
             @keyup.enter="updateTask"/>
      <div class="buttons">
        <button class="close"
              @click="updateTask">
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
  data: function() {
    return {
      hover: false,
      editing: false
    }
  },
  methods: {
    deleteTask: function() {
      this.$store.dispatch('deleteTask', {task: this.task, column: this.column})
    },
    editTask: function() {
      this.editing = true
    },
    updateTask: function() {
      this.editing = false
      this.$store.dispatch('updateTask', {task: this.task, column: this.column})
    },
    mouseOverTask: function() {
      this.hover = true
    },
    mouseLeaveTask: function() {
      this.hover = false
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/sass/variables";

.task {
  display: flex;
  flex-direction: column;
  margin: 15px 0;
  padding: 20px;
  background-color: $primary-lightest;
  border: 1px transparent solid;
  cursor: move;

  &.highlighted {
    background-color: $primary-lighter;
    border: 1px $highlight solid;
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
      background-color: $white;
      border: 1px $primary solid;
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
    background-color: $white;
    border: 1px $primary solid;
    padding: 5px;
    cursor: pointer;
    margin: 0 3px;
  }
}
</style>
