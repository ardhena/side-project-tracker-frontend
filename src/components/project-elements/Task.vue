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
        <EditButton @click="editTask"/>
        <DeleteButton @click="deleteTask"/>
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
        <SubmitButton style="padding-right: 2px;" @click="updateTask"/>
        <DeleteButton @click="deleteTask"/>
      </div>
    </div>
  </div>
</template>

<script>
import EditButton from '@/components/buttons/EditButton.vue'
import DeleteButton from '@/components/buttons/DeleteButton.vue'
import SubmitButton from '@/components/buttons/SubmitButton.vue'

export default {
  name: 'Task',
  components: {
    DeleteButton,
    EditButton,
    SubmitButton
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
  background-color: $primary-light;
  border: 1px $primary solid;
  cursor: move;

  &.highlighted {
    background-color: $primary;
    border: 1px $primary-dark solid;
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
      border: 1px $primary solid;
      padding: 5px;
    }
  }

  .buttons {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 5px;
  }
}
</style>
