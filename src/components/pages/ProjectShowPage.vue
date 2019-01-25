<template>
  <ViewContainer :title="project_key">
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

export default {
  name: 'ProjectShowPage',
  components: {
    ViewContainer,
    Column
  },
  computed: {
    columns() {
      return this.$store.state.project.getColumns()
    },
    project_key() {
      return this.$store.state.currentProject
    }
  },
  mounted: function() {
    this.$store.dispatch('fetchTasks')
  },
}
</script>

<style scoped lang="scss">
@import "../../assets/sass/variables";

.column-container {
  display: flex;
  justify-content: center;
  flex-direction: row;
}
</style>
