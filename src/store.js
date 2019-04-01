import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { Project } from '@/core/project'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiUrl: process.env.VUE_APP_BACKEND_BASE_URL,
    project: new Project(),
    visibleTasks: [],
    projects: [],
    currentPage: 'projects.list',
    currentProject: null,
    currentFilter: null
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
          context.state.projects = response.data.sort(function(a, b) {
            if (a.key < b.key) { return -1; }
            if (a.key > b.key) { return 1; }
            return 0;
          })
        })
    },
    fetchProject(context) {
      axios
        .get(context.state.apiUrl + '/projects/' + context.state.currentProject)
        .then(function (response) {
          Vue.set(context.state.project, 'versions', response.data.versions.sort(function(a, b) {
            if (a.code < b.code) { return -1; }
            if (a.code > b.code) { return 1; }
            return 0;
          }))
        })
    },
    newProject(context) {
      var key = window.prompt('New project name:', 'project...');

      axios
        .post(context.state.apiUrl + '/projects', {key: key})
        .then(function () {
          context.state.projects.push({key: key})
          context.state.projects = context.state.projects.sort(function(a, b) {
            if (a.key < b.key) { return -1; }
            if (a.key > b.key) { return 1; }
            return 0;
          })
        })
    },
    newVersion(context) {
      var code = window.prompt('New version code:', 'vX.Y.Z');

      axios
        .post(context.state.apiUrl + '/projects/' + context.state.currentProject + '/versions', {code: code})
        .then(function () {
          context.state.project.versions.push({code: code})
          Vue.set(context.state.project, 'versions', context.state.project.versions.sort(function(a, b) {
            if (a.code < b.code) { return -1; }
            if (a.code > b.code) { return 1; }
            return 0;
          }))
        })
    },
    fetchTasks(context) {
      axios
        .get(context.state.apiUrl + '/projects/' + context.state.currentProject + '/tasks')
        .then(function (response) {
          Vue.set(context.state.project, 'columns', response.data)
          context.state.visibleTasks = context.state.project.getColumns()
        })
    },
    filterTasks(context, payload) {
      let project = context.state.project
      context.state.visibleTasks = project.filterTasks(payload.version.code)
      context.state.currentFilter = payload.version.code
    },
    newTask(context, payload) {
      const uuidv1 = require('uuid/v1');
      let params = { ...payload, task_key: uuidv1()}

      axios
        .post(context.state.apiUrl + '/projects/' + context.state.currentProject + '/tasks', params)
        .then(function () {
          Vue.set(context.state.project, 'columns', context.state.project.addTask(params))
          context.state.visibleTasks = context.state.project.filterTasks(context.state.currentFilter)
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
      if (payload.task != null) {
        axios
          .post(context.state.apiUrl + '/projects/' + context.state.currentProject + '/tasks/' + payload.task.key + '/move', {column_key: payload.column.key})
          .then(function () {
            Vue.set(context.state.project, 'columns', context.state.project.moveTask(payload))
            context.state.visibleTasks = context.state.project.filterTasks(context.state.currentFilter)
          })
      } else {
        Vue.set(context.state.project, 'columns', context.state.project.moveTask(payload))
        context.state.visibleTasks = context.state.project.filterTasks(context.state.currentFilter)
      }
    },
    deleteTask(context, payload) {
      axios
        .delete(context.state.apiUrl + '/projects/' + context.state.currentProject + '/tasks/' + payload.task.key)
        .then(function () {
          Vue.set(context.state.project, 'columns', context.state.project.deleteTask(payload))
          context.state.visibleTasks = context.state.project.filterTasks(context.state.currentFilter)
        })
    }
  }
})
