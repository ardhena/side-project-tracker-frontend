import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiUrl: 'http://localhost:8800/api/v1/tasks',
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
    }
  },
  actions: {
    fetchTasks({commit, state}, payload) {
      axios.get(state.apiUrl)
        .then(function (response) {
          commit('fetchTasks', {columns: response.data})
        })
        .catch(function (error) {
          console.log(error);
        })
    },
    newTask({commit, state}, payload) {
      axios.post(state.apiUrl, {column_key: 'to-do', task_key: state.taskLastId + 1})
        .then(function (response) {
          commit('newTask')
        })
        .catch(function (error) {
          console.log(error);
        })
    },
    updateTask({commit, state}, payload) {
      axios.put(state.apiUrl + '/' + payload.task.key, {task_name: payload.task.name})
        .then(function (response) {
          commit('updateTask', payload)
        })
        .catch(function (error) {
          console.log(error);
        })
    },
    moveTask({commit, state}, payload) {
      if (payload.task) {
        axios.post(state.apiUrl + '/' + payload.task.key + '/move', {column_key: payload.column.key})
          .then(function (response) {
            commit('moveTask', payload)
          })
          .catch(function (error) {
            console.log(error)
          })
      } else {
        commit('moveTask', payload)
      }
    },
    clearTasks({commit, state}, payload) {
      axios.delete(state.apiUrl)
        .then(function (response) {
          commit('clearTasks', payload)
        })
        .catch(function (error) {
          console.log(error);
        })
    },
    deleteTask({commit, state}, payload) {
      commit('deleteTask', payload)
    }
  }
})
