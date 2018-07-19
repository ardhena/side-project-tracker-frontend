import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    taskLastId: 4,
    columns: [
      {
        name: 'To do',
        key: 'to-do',
        tasks: [
          {name: 'some task', key: 1},
          {name: 'another task', key: 2},
        ]
      },
      {
        name: 'Doing',
        key: 'doing',
        tasks: [
          {name: 'working on it now', key: 3},
        ]
      },
      {
        name: 'Done',
        key: 'done',
        tasks: [
          {name: 'already done task', key: 4},
        ]
      }
    ]
  },
  mutations: {
    newTask(state) {
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
    }
  },
  actions: {

  }
})
