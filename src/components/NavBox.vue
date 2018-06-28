<template>
  <div class="box">
    <div class="title">{{title}}</div>

    <div class="links">
      <NavLink v-for="link in links"
               :key="link.key"
               :link="link"/>
    </div>
  </div>
</template>

<script>
import NavLink from "@/components/NavLink.vue"

export default {
  name: 'NavBox',
  components: {
    NavLink
  },
  props: {
    columns: Array
  },
  data: function() {
    var columns = this.columns
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
          name: 'New task',
          hover: false,
          key: 'new-entry',
          function: function() {
            columns[0].tasks.unshift({name: '', hover: false, editing: true})
          }
        },
      ]
    }
  }
}
</script>

<style scoped>
.box {
  border-bottom: 1px #b3a9c6 solid;
  padding: 0;
  display: inline-flex;
  width: 100%;
}
.box .title {
  font-weight: 600;
  width: 50%;
  padding: 20px 0 17px 20px;
}

.box .links {
  width: 50%;
  display: inline-flex;
  justify-content: flex-end;
  padding: 0 20px;
}
</style>
