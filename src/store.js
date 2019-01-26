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
    currentPage: 'projects.list',
    currentProject: null
  },
  mutations: {
    setCurrentPage(state, payload) {
      state.currentPage = payload.page
      state.currentProject = payload.project
    }
  },
  actions: {
    fetchProjects(context) {
      axios
        .get(context.state.apiUrl + '/projects')
        .then(function (response) {
          context.state.projects = response.data.sort((a, b) => a.key > b.key)
        })
    },
    fetchProject(context) {
      axios
        .get(context.state.apiUrl + '/projects/' + context.state.currentProject)
        .then(function (response) {
          Vue.set(context.state.project, 'versions', response.data.versions)
        })
    },
    newProject(context) {
      var key = window.prompt('New project name:', 'project...');

      axios
        .post(context.state.apiUrl + '/projects', {key: key})
        .then(function () {
          context.state.projects.push({key: key})
          context.state.projects = context.state.projects.sort((a, b) => a.key > b.key)
        })
    },
    newVersion(context) {
      var code = window.prompt('New version code:', 'vX.Y.Z');

      axios
        .post(context.state.apiUrl + '/projects/' + context.state.currentProject + '/versions', {code: code})
        .then(function () {
          context.state.project.versions.push({code: code})
          Vue.set(context.state.project, 'versions', context.state.project.versions)
        })
    },
    fetchTasks(context) {
      axios
        .get(context.state.apiUrl + '/projects/' + context.state.currentProject + '/tasks')
        .then(function (response) {
          Vue.set(context.state.project, 'columns', response.data)
        })
    },
    clearTasks(context) {
      axios
        .delete(context.state.apiUrl + '/projects/' + context.state.currentProject + '/tasks')
        .then(function () {
          Vue.set(context.state.project, 'columns', context.state.project.clearTasks())
        })
    },
    newTask(context) {
      const uuidv1 = require('uuid/v1');
      let uuid = uuidv1()

      axios
        .post(context.state.apiUrl + '/projects/' + context.state.currentProject + '/tasks', {column_key: 'todo', task_key: uuid})
        .then(function () {
          Vue.set(context.state.project, 'columns', context.state.project.addTask(uuid))
        })
    },
    updateTask(context, payload) {
      axios
        .patch(context.state.apiUrl + '/projects/' + context.state.currentProject + '/tasks/' + payload.task.key, {task_name: payload.task.name, task_version: payload.task.version})
        .then(function () {
          Vue.set(context.state.project, 'columns', context.state.project.updateTask(payload))
        })
    },
    moveTask(context, payload) {
      if (payload.task) {
        axios
          .post(context.state.apiUrl + '/projects/' + context.state.currentProject + '/tasks/' + payload.task.key + '/move', {column_key: payload.column.key})
          .then(function () {
            Vue.set(context.state.project, 'columns', context.state.project.moveTask(payload))
          })
      } else {
        Vue.set(context.state.project, 'columns', context.state.project.moveTask(payload))
      }
    },
    deleteTask(context, payload) {
      axios
        .delete(context.state.apiUrl + '/projects/' + context.state.currentProject + '/tasks/' + payload.task.key)
        .then(function () {
          Vue.set(context.state.project, 'columns', context.state.project.deleteTask(payload))
        })
    }
  }
})
