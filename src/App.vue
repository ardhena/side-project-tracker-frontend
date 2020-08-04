<template>
  <div id="app">
    <NavBox/>
    <router-view/>
    <FooterBox/>
  </div>
</template>

<script>
import NavBox from '@/components/navigation/NavBox.vue'
import FooterBox from '@/components/navigation/FooterBox.vue'

export default {
  name: 'app',
  components: {
    FooterBox,
    NavBox
  }
}
</script>

<style lang="scss">
@import "assets/sass/variables";

body {
  color: $black;
  background-color: $white;
  margin: 0;
  padding: 0;
  font-family: $font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  textarea {font-family: $font-family;}
}
</style>
