<template>
  <div class="box">
    <span>Side Project Tracker</span>
  </div>
</template>

<script>

export default {
  name: 'FooterBox'
}
</script>

<style scoped lang="scss">
@import "../../assets/sass/variables";

.box {
  display: inline-flex;
  justify-content: center;
  width: 100vw;
  padding: 10px 0;
  margin: auto;
  color: $secondary-light;
}
</style>
