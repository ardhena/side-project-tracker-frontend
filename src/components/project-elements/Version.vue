<template>
  <div class="version" @click="filterTasks">
    {{version.code}}
  </div>
</template>

<script>
export default {
  name: 'Version',
  props: {
    version: Object
  },
  methods: {
    filterTasks: function () {
      this.$store.dispatch('filterTasks', {version: this.version})
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/sass/variables";

.version {
  display: block;
  padding: 5px;
  margin: 7px;
  background-color: $primary-lightest;
  border: 1px $primary-lighter solid;
  cursor: pointer;
}
</style>
