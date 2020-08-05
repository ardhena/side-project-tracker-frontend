<template>
  <div class="project-container" :class="hover ? 'highlighted' : ''" @mouseover="hover = true" @mouseleave="hover = false">
    <div class="project"
         @click="goToProjectRoute">
      <div>{{project.key}}</div>
    </div>
    <div class="project-actions" :class="hover ? 'highlighted' : ''">
      <DeleteButton @click="deleteProject"/>
    </div>
  </div>
</template>

<script>
import DeleteButton from '@/components/buttons/DeleteButton.vue'

export default {
  name: 'Project',
  components: {
    DeleteButton
  },
  props: {
    project: Object
  },
  data: function() {
    return {
      hover: false
    }
  },
  methods: {
    goToProjectRoute: function() {
      this.$router.push({ name: 'project', params: { id: this.project.key} })
    },
    deleteProject: function() {
      if (confirm("Are you sure you want to delete project " + this.project.key + "?")) {
        this.$store.dispatch('deleteProject', this.project.key)
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/sass/variables";

.project-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}

.project {
  height: 25px;
  display: flex;
  align-items: center;
  width: 270px;
  margin: 20px;
  margin-right: 0;
  padding: 20px;
  padding-right: 0;
  background-color: $primary-light;
  border: 1px $primary solid;
  border-right: none;
}

.project-actions {
  height: 25px;
  display: flex;
  align-items: center;
  margin: 20px;
  margin-left: 0;
  padding: 20px;
  background-color: $primary-light;
  border: 1px $primary solid;
  border-left: none;
}

.highlighted {
  .project {
    background-color: $primary;
    border: 1px $primary-dark solid;
    border-right: none;
    cursor: pointer;
  }

  .project-actions {
    background-color: $primary;
    border: 1px $primary-dark solid;
    border-left: none;
    cursor: pointer;
  }
}
</style>
