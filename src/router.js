import Vue from 'vue'
import Router from 'vue-router'
import ProjectListPage from '@/views/ProjectListPage.vue'
import ProjectShowPage from '@/views/ProjectShowPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/projects',
      name: 'projects',
      component: ProjectListPage
    },
    {
      path: '/projects/:id',
      name: 'project',
      component: ProjectShowPage
    },
    {
      path: '*',
      component: ProjectListPage
    }
  ]
})
