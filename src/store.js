import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { Project } from '@/core/project'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiUrl: process.env.VUE_APP_BACKEND_BASE_URL,
    project: new Project(),
    projects: [],
    currentPage: 'projects.index'
  },
  getters: {
    currentPage: (state) => {
      return state.currentPage
    }
  },
  mutations: {
    setCurrentPage(state, newCurrentPage) {
      state.currentPage = newCurrentPage
    }
  },
  actions: {
    fetchProjects(context) {
      axios
        .get(context.state.apiUrl + '/projects')
        .then(function (response) {
          context.state.projects = response.data
        })
    },
    fetchTasks(context) {
      axios
        .get(context.state.apiUrl + '/projects/default/tasks')
        .then(function (response) {
          Vue.set(context.state.project, 'columns', response.data)
        })
    },
    clearTasks(context) {
      axios
        .delete(context.state.apiUrl + '/projects/default/tasks')
        .then(function () {
          Vue.set(context.state.project, 'columns', context.state.project.clearTasks())
        })
    },
    newTask(context) {
      const uuidv1 = require('uuid/v1');
      let uuid = uuidv1()

      axios
        .post(context.state.apiUrl + '/projects/default/tasks', {column_key: 'todo', task_key: uuid})
        .then(function () {
          Vue.set(context.state.project, 'columns', context.state.project.addTask(uuid))
        })
    },
    updateTask(context, payload) {
      axios
        .patch(context.state.apiUrl + '/projects/default/tasks/' + payload.task.key, {task_name: payload.task.name})
        .then(function () {
          Vue.set(context.state.project, 'columns', context.state.project.updateTask(payload))
        })
    },
    moveTask(context, payload) {
      if (payload.task) {
        axios
          .post(context.state.apiUrl + '/projects/default/tasks/' + payload.task.key + '/move', {column_key: payload.column.key})
          .then(function () {
            Vue.set(context.state.project, 'columns', context.state.project.moveTask(payload))
          })
      } else {
        Vue.set(context.state.project, 'columns', context.state.project.moveTask(payload))
      }
    },
    deleteTask(context, payload) {
      axios
        .delete(context.state.apiUrl + '/projects/default/tasks/' + payload.task.key)
        .then(function () {
          Vue.set(context.state.project, 'columns', context.state.project.deleteTask(payload))
        })
    }
  }
})
