<template>
  <div class="project"
       :class="hover ? 'highlighted' : ''"
       @mouseover="hover = true"
       @mouseleave="hover = false"
       @click="$store.commit('setCurrentPage', 'projects.show')">
    <div class="name">{{project.name}}</div>
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
