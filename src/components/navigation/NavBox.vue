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
import NavLink from "@/components/navigation/NavLink.vue"

export default {
  name: 'NavBox',
  components: {
    NavLink
  },
  data: function() {
    var that = this
    return {
      title: "Simple to do application",
      links: [
        {
          name: 'New task',
          hover: false,
          key: 'new-task',
          function: function() {
            that.$store.dispatch('newTask')
          }
        },
        {
          name: 'Clear all tasks',
          hover: false,
          key: 'clear-tasks',
          function: function() {
            that.$store.dispatch('clearTasks')
          }
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/sass/variables";

.box {
  border-bottom: 1px $primary solid;
  padding: 0;
  display: inline-flex;
  width: 100%;

  .title {
    font-weight: 600;
    width: 50%;
    padding: 20px 0 17px 20px;
  }

  .links {
    width: 50%;
    display: inline-flex;
    justify-content: flex-end;
    padding: 0 20px;
  }
}
</style>
