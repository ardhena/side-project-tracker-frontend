<template>
  <div class="version"
       :class="filterEnabled ? 'highlighted' : ''"
       @click="filterTasks">
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
  },
  computed: {
    filterEnabled() {
      return this.$store.state.currentFilter == this.version.code
    }
  },
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

  &.highlighted {
    background-color: $primary-lighter;
    border: 1px $highlight solid;
  }
}
</style>
