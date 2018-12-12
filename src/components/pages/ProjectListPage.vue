<template>
  <ViewContainer title="Projects">
    <div class="box-container">
      <Project v-for="project in projects"
               :key="project.key"
               :project="project"/>
    </div>
  </ViewContainer>
</template>

<script>
import ViewContainer from '@/components/ViewContainer.vue'
import Project from '@/components/project-elements/Project.vue'

export default {
  name: 'ProjectListPage',
  components: {
    ViewContainer,
    Project
  },
  computed: {
    projects() {
      return this.$store.state.projects
    }
  },
  mounted: function() {
    this.$store.dispatch('fetchProjects')
  },
}
</script>

<style scoped lang="scss">
@import "../../assets/sass/variables";

.box-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: auto;
}

</style>
