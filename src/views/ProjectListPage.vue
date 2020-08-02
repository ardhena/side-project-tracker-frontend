<template>
  <ViewContainer title="Projects">
    <div class="data-container">
      <div class="data-column">
        <font-awesome-icon icon="plus" class="icon" @click="newProject"/>
      </div>
    </div>

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
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faPlus)

export default {
  name: 'ProjectListPage',
  components: {
    ViewContainer,
    Project,
    FontAwesomeIcon
  },
  computed: {
    projects() {
      return this.$store.state.projects
    }
  },
  mounted: function() {
    this.$store.dispatch('fetchProjects')
  },
  methods: {
    newProject: function() {
      this.$store.dispatch('newProject')
    },
  }
}
</script>

<style scoped lang="scss">
@import "../assets/sass/variables";

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

.data-container {
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding: 10px;

  .data-column {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    text-align: center;
  }
}

.icon {
  padding: 5px;
  cursor: pointer;
}

</style>
