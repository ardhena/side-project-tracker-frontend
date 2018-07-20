import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    taskLastId: 4,
    columns: []
  },
  mutations: {
    fetchTasks(state, payload) {
      state.columns = payload.columns
    },
    newTask(state, payload) {
      state.columns[0].tasks.unshift({name: '', key: state.taskLastId})
      state.taskLastId = state.taskLastId + 1
    },
    clearTasks(state) {
      state.columns[0].tasks = []
      state.columns[1].tasks = []
      state.columns[2].tasks = []
    },
    deleteTask(state, payload) {
      let columnIndex = state.columns.findIndex(function(column) {
        return column.key == payload.column.key
      })
      let newTasks = state.columns[columnIndex].tasks.filter(function(task) {
        return task.key != payload.task.key
      })
      state.columns[columnIndex].tasks = newTasks
    },
    updateTask(state, payload) {
      let columnIndex = state.columns.findIndex(function(column) {
        return column.key == payload.column.key
      })
      let taskIndex = state.columns[columnIndex].tasks.findIndex(function(task) {
        return task.key == payload.task.key
      })
      state.columns[columnIndex].tasks[taskIndex].name = payload.task.name
    },
    moveTask(state, payload) {
      let columnIndex = state.columns.findIndex(function(column) {
        return column.key == payload.column.key
      })
      state.columns[columnIndex].tasks = payload.tasks
    }
  },
  actions: {
    fetchTasks(context) {
      const axios = require('axios');
      axios.get('http://localhost:8800/api/v1/tasks')
        .then(function (response) {
          context.commit('fetchTasks', {columns: response.data})
        })
        .catch(function (error) {
          console.log(error);
        })
    }
  }
})
