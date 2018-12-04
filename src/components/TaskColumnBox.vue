<template>
  <div class="box">
    <TaskColumn v-for="(column, index) in columns"
                :column="column"
                :columnIndex="index"
                :key="column.key"/>
  </div>
</template>

<script>
import TaskColumn from '@/components/TaskColumn.vue'

export default {
  name: 'TaskColumnBox',
  components: {
    TaskColumn
  },
  computed: {
    columns() {
      return this.$store.state.project.getColumns()
    }
  },
}
</script>

<style scoped lang="scss">
.box {
  display: flex;
  justify-content: center;
}
</style>
