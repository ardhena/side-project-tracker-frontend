<template>
  <div class="view-container">
    <div class="title">{{title}}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ViewContainer',
  props: {
    title: String,
  }
}
</script>

<style scoped lang="scss">
@import "../assets/sass/variables";

.view-container {
  margin: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  .title {
    margin: auto;
    font-size: 1.5rem;
    border-bottom: 2px solid $primary;
    padding: 10px 20px;
  }
}
</style>
