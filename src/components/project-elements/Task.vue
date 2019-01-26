<template>
  <div class="task"
       :class="hover ? 'highlighted' : ''"
       @mouseover="mouseOverTask"
       @mouseleave="mouseLeaveTask">
    <div class="text" v-show="!editing">
      <div class="view-container">
        <span class="name"
              @click="editTask">
          {{task.name}}
        </span>
        <span class="version">{{task.version}}</span>
      </div>
      <div class="buttons">
        <font-awesome-icon icon="edit" class="icon" @click="editTask"/>
        <font-awesome-icon icon="trash" class="icon" @click="deleteTask"/>
      </div>
    </div>
    <div v-show="editing" class="text-input">
      <div class="form-container">
        <textarea rows="4" class="content"
               v-model="task.name"
               @keyup.enter="updateTask">
        </textarea>
        <select v-model="task.version">
          <option value="">No version</option>
          <option v-for="version in project.versions" :key="version.code">
            {{version.code}}
          </option>
        </select>
      </div>
      <div class="buttons">
        <font-awesome-icon icon="check" class="icon" style="padding-right: 2px;" @click="updateTask"/>
        <font-awesome-icon icon="trash" class="icon" @click="deleteTask"/>
      </div>
    </div>
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEdit, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons'

library.add(faEdit)
library.add(faTrash)
library.add(faCheck)

export default {
  name: 'Task',
  components: {
    FontAwesomeIcon
  },
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
  computed: {
    project() {
      return this.$store.state.project
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
  padding: 10px;
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

    .view-container {
      display: inline-flex;
      flex-direction: column;
    }

    .name {
      cursor: text;
      width: auto;
    }

    .version {
      font-size: 11px;
      padding-top: 4px;
    }
  }

  .text-input {
    display: inline-flex;
    flex-direction: row;
    justify-content: space-between;

    .form-container {
      display: inline-flex;
      flex-direction: column;
      width: 100%;
    }

    .content {
      background-color: $white;
      border: 1px $primary-lighter solid;
      padding: 5px;
    }
  }

  .buttons {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 5px;
  }

  .icon {
    padding: 4px 0;
    cursor: pointer;
    color: $highlight;
    &:hover {
      color: $black;
    }
  }
}
</style>
