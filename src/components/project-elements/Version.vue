<template>
  <div class="version"
       :class="filterEnabled ? 'highlighted' : ''"
       @click="toggleFilterTasks">
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
    toggleFilterTasks: function () {
      if (this.filterEnabled) {
        this.$store.dispatch('filterTasks', {version: {code: null}})
      } else {
        this.$store.dispatch('filterTasks', {version: this.version})
      }
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
  background-color: $primary-light;
  border: 1px $primary solid;
  cursor: pointer;

  &.highlighted {
    background-color: $primary;
    border: 1px $primary-dark solid;
  }
}
</style>
