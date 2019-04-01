<template>
  <div class="box">
    <div class="title" @click="viewAllProjects">SideProjectTracker</div>
  </div>
</template>

<script>

export default {
  name: 'NavBox',
  methods: {
    viewAllProjects: function() {
      this.$store.commit('setCurrentPage', {page: 'projects.list', project: null})
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
