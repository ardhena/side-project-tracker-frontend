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
        {name: "To do", hover: false},
        {name: "Doing", hover: false},
        {name: "Done", hover: false}
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
