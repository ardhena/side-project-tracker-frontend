<template>
  <ViewContainer :title="project_key">
    <div class="data-container">
      <div class="data-column">
        <div class="subtitle">Versions:</div>
        <Version v-for="version in project.versions" :version="version" :key="version.code"/>
        <font-awesome-icon icon="plus" class="icon"/>
      </div>
    </div>
    <div class="column-container">
      <Column v-for="(column, index) in columns"
              :column="column"
              :columnIndex="index"
              :key="column.key"/>
    </div>
  </ViewContainer>
</template>

<script>
import ViewContainer from '@/components/ViewContainer.vue'
import Column from '@/components/project-elements/Column.vue'
import Version from '@/components/project-elements/Version.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faPlus)

export default {
  name: 'ProjectShowPage',
  components: {
    ViewContainer,
    Column,
    Version,
    FontAwesomeIcon
  },
  computed: {
    project() {
      return this.$store.state.project
    },
    columns() {
      return this.$store.state.project.getColumns()
    },
    project_key() {
      return this.$store.state.currentProject
    }
  },
  mounted: function() {
    this.$store.dispatch('fetchProject')
    this.$store.dispatch('fetchTasks')
  },
}
</script>

<style scoped lang="scss">
@import "../../assets/sass/variables";

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

    .subtitle {
      font-weight: 550;
    }
  }
}

.icon {
  padding: 4px 0;
  cursor: pointer;
}

.column-container {
  display: flex;
  justify-content: center;
  flex-direction: row;
}
</style>
