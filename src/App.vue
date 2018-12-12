<template>
  <div id="app">
    <NavBox/>
    <ProjectList v-if="currentPage == 'projects.index'"/>
    <TaskColumnBox v-if="currentPage == 'projects.show'"/>
  </div>
</template>

<script>
import NavBox from '@/components/navigation/NavBox.vue'
import ProjectList from '@/components/ProjectList.vue'
import TaskColumnBox from '@/components/TaskColumnBox.vue'

export default {
  name: 'app',
  components: {
    NavBox,
    ProjectList,
    TaskColumnBox
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
