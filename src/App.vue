<template>
  <div id="app">
    <NavBarTop/>
    <ColumnsBox/>
  </div>
</template>

<script>
import NavBarTop from '@/components/NavBarTop.vue'
import ColumnsBox from '@/components/ColumnsBox.vue'

export default {
  name: 'app',
  components: {
    NavBarTop,
    ColumnsBox
  }
}
</script>

<style>
body {
  color: #2c2a30;
  background-color: #fbfbfb;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
