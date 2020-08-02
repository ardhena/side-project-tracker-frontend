<template>
  <div class="box">
    <div class="title" @click="goToProjectsRoute">SideProjectTracker</div>
  </div>
</template>

<script>

export default {
  name: 'NavBox',
  methods: {
    goToProjectsRoute: function() {
      if (this.$route.name !== 'projects') {
        this.$router.push({ name: 'projects'})
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/sass/variables";

.box {
  border-bottom: 1px $primary solid;
  padding: 0;
  display: inline-flex;
  width: 100%;

  .title {
    font-weight: 600;
    width: 50%;
    padding: 20px 0 17px 20px;
    cursor: pointer;
  }
}
</style>
