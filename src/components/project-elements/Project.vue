<template>
  <div class="project"
       :class="hover ? 'highlighted' : ''"
       @mouseover="hover = true"
       @mouseleave="hover = false"
       @click="goToProjectRoute">
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
    goToProjectRoute: function() {
      this.$router.push({ name: 'project', params: { id: this.project.key} })
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
