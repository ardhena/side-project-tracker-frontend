<template>
  <div class="version">
    {{version.code}}
  </div>
</template>

<script>
export default {
  name: 'Version',
  props: {
    version: Object
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
}
</style>
