<template>
  <div class="view-container">
    <div class="title">{{title}}</div>
    <div class="content-container">
      <slot></slot>
    </div>
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
    color: $secondary;
    border-bottom: 2px solid $secondary-light;
    padding: 10px 20px;
  }
}

.content-container {
  min-height: 80vh;
}
</style>
