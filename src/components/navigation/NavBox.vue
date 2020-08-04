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
  border-bottom: 1px $secondary solid;
  background-color: $secondary-light;
  padding: 0;
  display: inline-flex;
  width: 100vw;

  .title {
    font-weight: 600;
    padding: 20px 20px;
    color: $secondary;
    cursor: pointer;
  }
}
</style>
