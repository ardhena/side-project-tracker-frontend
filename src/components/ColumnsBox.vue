<template>
  <div class="columns-box">
    <EntryColumn
        v-for="column in columns"
        :column="column"
        :key="column.key"/>
  </div>
</template>

<script>
import EntryColumn from '@/components/EntryColumn.vue'

export default {
  name: 'ColumnsBox',
  components: {
    EntryColumn
  },
  data: function() {
    return {
      columns: [
        {
          name: 'To do',
          key: 'to-do',
          tasks: [
            {name: 'some task', hover: false},
            {name: 'another task', hover: false},
          ]
        },
        {
          name: 'Doing',
          key: 'doing',
          tasks: [
            {name: 'working on it now', hover: false},
          ]
        },
        {
          name: 'Done',
          key: 'done',
          tasks: [
            {name: 'already done task', hover: false},
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.columns-box {
  display: flex;
  justify-content: center;
}
</style>
