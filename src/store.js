import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    columns: [
      {
        name: 'To do',
        key: 'to-do',
        tasks: [
          {name: 'some task', hover: false, editing: false},
          {name: 'another task', hover: false, editing: false},
        ]
      },
      {
        name: 'Doing',
        key: 'doing',
        tasks: [
          {name: 'working on it now', hover: false, editing: false},
        ]
      },
      {
        name: 'Done',
        key: 'done',
        tasks: [
          {name: 'already done task', hover: false, editing: false},
        ]
      }
    ]
  },
  mutations: {

  },
  actions: {

  }
})
