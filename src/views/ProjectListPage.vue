<template>
  <ViewContainer title="Projects">
    <div class="data-container">
      <div class="data-column">
        <PlusButton @click="newProject"/>
        <TopTooltip>
          <template slot="content">
            <SyncButton @click="syncProjects"/>
          </template>
          <template slot="tooltip">
            <span>
              Last sync at: {{syncAt}}
            </span>
          </template>
        </TopTooltip>
      </div>
    </div>

    <div class="box-container">
      <Project v-for="project in projects"
               :key="project.key"
               :project="project"/>
      <div class="dummy-project"></div>
      <div class="dummy-project"></div>
      <div class="dummy-project"></div>
    </div>
  </ViewContainer>
</template>

<script>
import ViewContainer from '@/components/ViewContainer.vue'
import Project from '@/components/project-elements/Project.vue'
import PlusButton from '@/components/buttons/PlusButton.vue'
import SyncButton from '@/components/buttons/SyncButton.vue'
import TopTooltip from '@/components/tooltips/TopTooltip.vue'

export default {
  name: 'ProjectListPage',
  components: {
    ViewContainer,
    Project,
    PlusButton,
    SyncButton,
    TopTooltip
  },
  computed: {
    projects() {
      return this.$store.state.projects
    },
    syncAt() {
      if (this.$store.state.syncAt == null) {
        return 'unknown'
      }
      const d = new Date(this.$store.state.syncAt)
      const day = d.getDate()
      const month = d.getMonth()
      const year = d.getFullYear()

      const hours = d.getHours()
      const minutes = d.getMinutes()

      return `${hours}:${minutes} ${day}.${month}.${year}`
    }
  },
  mounted: function() {
    this.$store.dispatch('fetchProjects')
  },
  methods: {
    newProject: function() {
      this.$store.dispatch('newProject')
    },
    syncProjects: function() {
      this.$store.dispatch('syncProjects')
    }
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

</style>
