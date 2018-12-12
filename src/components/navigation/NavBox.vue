<template>
  <div class="box">
    <div class="title" @click="$store.commit('setCurrentPage', 'projects.index')">SideProjectTracker</div>

    <div class="links" v-if="this.$store.state.currentPage == 'projects.show'">
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
    cursor: pointer;
  }

  .links {
    width: 50%;
    display: inline-flex;
    justify-content: flex-end;
    padding: 0 20px;
  }
}
</style>
