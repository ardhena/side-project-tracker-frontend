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
          hover: false,
          key: 'to-do',
          tasks: [
            {name: 'some task'},
            {name: 'another task'},
          ]
        },
        {
          name: 'Doing',
          hover: false,
          key: 'doing',
          tasks: [
            {name: 'working on it now'},
          ]
        },
        {
          name: 'Done',
          hover: false,
          key: 'done',
          tasks: [
            {name: 'already done task'},
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
