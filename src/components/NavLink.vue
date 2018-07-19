<template>
  <div class="link"
       :class="link.hover ? 'highlighted' : ''"
       @mouseover="link.hover = true"
       @mouseleave="link.hover = false"
       @click="link.function">
    {{link.name}}
  </div>
</template>

<script>
export default {
  name: 'NavLink',
  props: {
    link: Object
  }
}
</script>

<style scoped lang="scss">
.link {
  border-bottom: 3px transparent solid;
  padding: 20px 10px 17px 10px;
  margin: 0 5px;

  .highlighted {
    border-bottom: 3px #ac91e2 solid;
    cursor: pointer;
  }
}
</style>
