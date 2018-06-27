<template>
  <div class="nav-bar-top">
    <div class="title">{{title}}</div>
    <div class="links">
      <div v-for="link in links" :key="link.key"
           class="link-entry"
           :class="link.hover ? 'highlighted' : ''"
           @mouseover="link.hover = true"
           @mouseleave="link.hover = false"
           @click="link.function">{{link.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBarTop',
  data: function() {
    return {
      title: "Simple to do application",
      links: [
        {
          name: 'About',
          hover: false,
          key: 'about-entry',
          function: function() {
            alert("about entry")
          }
        },
        {
          name: 'New entry',
          hover: false,
          key: 'new-entry',
          function: function() {
            alert("new entry")
          }
        },
      ]
    }
  }
}
</script>

<style scoped>
.nav-bar-top {
  border-bottom: 1px #b3a9c6 solid;
  padding: 0;
  display: inline-flex;
  width: 100%;
}
.nav-bar-top .title {
  font-weight: 600;
  width: 50%;
  padding: 20px 0 17px 20px;
}

.nav-bar-top .links {
  width: 50%;
  display: inline-flex;
  justify-content: flex-end;
  padding: 0 20px;
}
.nav-bar-top .link-entry {
  border-bottom: 3px transparent solid;
  padding: 20px 10px 17px 10px;
  margin: 0 5px;
}
.nav-bar-top .link-entry.highlighted {
  border-bottom: 3px #ac91e2 solid;
  cursor: pointer;
}
</style>
