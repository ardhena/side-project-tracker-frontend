<template>
  <div class="list-box-container">
    <div class="list-box">
      <ProjectListBox v-for="project in projects"
                      :key="project.key"
                      :project="project"/>
      </div>
  </div>
</template>

<script>
import ProjectListBox from '@/components/ProjectListBox.vue'

export default {
  name: 'ProjectList',
  components: {
    ProjectListBox
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

.list-box-container {
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .list-box {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: auto;
  }
}

</style>
