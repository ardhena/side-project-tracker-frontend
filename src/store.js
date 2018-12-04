import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { Project } from '@/core/project'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiUrl: 'http://localhost:8800/api/v1', // move to config
    taskLastId: 4, // TODO: calculate based on results from API or do it on API side
    project: new Project()
  },
  actions: {
    fetchTasks(context) {
      axios
        .get(context.state.apiUrl + '/tasks')
        .then(function (response) {
          Vue.set(context.state.project, 'columns', response.data)
        })
    },
    clearTasks(context) {
      axios
        .delete(context.state.apiUrl + '/tasks')
        .then(function () {
          Vue.set(context.state.project, 'columns', context.state.project.clearTasks())
        })
    },
    newTask(context) {
      axios
        .post(context.state.apiUrl + '/tasks', {column_key: 'todo', task_key: context.state.taskLastId + 1})
        .then(function () {
          Vue.set(context.state.project, 'columns', context.state.project.addTask(context.state.taskLastId + 1))
          context.state.taskLastId = context.state.taskLastId + 1
        })
    },
    updateTask(context, payload) {
      axios
        .patch(context.state.apiUrl + '/tasks/' + payload.task.key, {task_name: payload.task.name})
        .then(function () {
          Vue.set(context.state.project, 'columns', context.state.project.updateTask(payload))
        })
    },
    moveTask(context, payload) {
      if (payload.task) {
        axios
          .post(context.state.apiUrl + '/tasks/' + payload.task.key + '/move', {column_key: payload.column.key})
          .then(function () {
            Vue.set(context.state.project, 'columns', context.state.project.moveTask(payload))
          })
      } else {
        Vue.set(context.state.project, 'columns', context.state.project.moveTask(payload))
      }
    },
    deleteTask(context, payload) {
      axios
        .delete(context.state.apiUrl + '/tasks/' + payload.task.key)
        .then(function () {
          Vue.set(context.state.project, 'columns', context.state.project.deleteTask(payload))
        })
    }
  }
})
