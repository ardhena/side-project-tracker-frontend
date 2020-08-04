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
  background-color: $primary-light;
  border: 1px $primary solid;

  &.highlighted {
    background-color: $primary;
    border: 1px $primary-dark solid;
    cursor: pointer;
  }
}

</style>
