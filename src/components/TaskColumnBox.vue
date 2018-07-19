<template>
  <div class="box">
    <TaskColumn v-for="column in columns"
                :column="column"
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
      return this.$store.state.columns
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
