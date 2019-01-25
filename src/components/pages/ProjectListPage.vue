<template>
  <ViewContainer title="Projects">
    <div class="box-container">
      <Project v-for="project in projects"
               :key="project.key"
               :project="project"/>
      <div class="dummy-project"></div>
      <div class="dummy-project"></div>
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
  justify-content: space-evenly;
  margin: auto;

  .dummy-project {
    width: 300px;
    margin: 20px;
    padding: 20px;
    border: 1px transparent solid;
  }
}

</style>
