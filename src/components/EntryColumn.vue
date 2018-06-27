<template>
  <div class="entry-column"
       :class="column.hover ? 'highlighted' : ''"
       @mouseover="column.hover = true"
       @mouseleave="column.hover = false">
    <div class="name">{{column.name}}</div>
  </div>
</template>

<script>
export default {
  name: 'EntryColumn',
  props: {
    column: Object
  }
}
</script>

<style scoped>
.entry-column {
  margin: 20px 0;
  width: 350px;
  height: 600px;
  padding: 10px 20px;
}
.entry-column.highlighted {
  background-color: rgba(179, 169, 198, 0.1);
}

.entry-column .name {
  border-bottom: 1px #b3a9c6 solid;
  padding: 10px;
  text-align: center;
  font-weight: 600;
}

</style>
