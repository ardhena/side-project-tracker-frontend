<template>
  <div class="project"
       :class="hover ? 'highlighted' : ''"
       @mouseover="hover = true"
       @mouseleave="hover = false"
       @click="viewProject">
    <div class="name">{{project.key}}</div>
  </div>
</template>

<script>
export default {
  name: 'Project',
  props: {
    project: Object
  },
  data: function() {
    return {
      hover: false
    }
  },
  methods: {
    viewProject: function() {
      this.$store.commit('setCurrentPage', {page: 'projects.show', project: this.project.key})
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/sass/variables";

.project {
  width: 300px;
  margin: 20px;
  padding: 20px;
  background-color: $primary-lightest;
  border: 1px transparent solid;

  &.highlighted {
    background-color: $primary-lighter;
    border: 1px $highlight solid;
    cursor: pointer;
  }
}

</style>
