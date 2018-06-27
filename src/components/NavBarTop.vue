<template>
  <div class="nav-bar-top">
    <div class="title">{{title}}</div>
  </div>
</template>

<script>
export default {
  name: 'NavBarTop',
  data: function() {
    return {
      title: "Simple to do application"
    }
  }
}
</script>

<style scoped>
.nav-bar-top {
  border-bottom: 1px #b3a9c6 solid;
  text-align: center;
  padding: 20px;
}
.nav-bar-top .title {
  font-weight: 600;
}
</style>
