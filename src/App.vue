<template>
  <div id="app">
    <NavBox/>
    <ProjectListPage v-if="currentPage == 'projects.list'"/>
    <ProjectShowPage v-if="currentPage == 'projects.show'"/>
  </div>
</template>

<script>
import NavBox from '@/components/navigation/NavBox.vue'
import ProjectListPage from '@/components/pages/ProjectListPage.vue'
import ProjectShowPage from '@/components/pages/ProjectShowPage.vue'

export default {
  name: 'app',
  components: {
    NavBox,
    ProjectListPage,
    ProjectShowPage
  },
  computed: {
    currentPage() {
      return this.$store.state.currentPage
    }
  }
}
</script>

<style lang="scss">
@import "assets/sass/variables";

body {
  color: $black;
  background-color: $white;
  margin: 0;
  padding: 0;
  font-family: $font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
