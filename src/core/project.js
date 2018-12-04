export class Project {
  getColumns() { return this.columns }
  setColumns(cols) { this.columns = cols }

  addTask(uuid) {
    this.columns[0].tasks.unshift({name: '', key: uuid})
    return this.columns
  }

  updateTask(payload) {
    let columnIndex = this.columns.findIndex(function(column) {
      return column.key == payload.column.key
    })
    let taskIndex = this.columns[columnIndex].tasks.findIndex(function(task) {
      return task.key == payload.task.key
    })
    this.columns[columnIndex].tasks[taskIndex].name = payload.task.name
    return this.columns
  }

  moveTask(payload) {
    let columnIndex = this.columns.findIndex(function(column) {
      return column.key == payload.column.key
    })
    this.columns[columnIndex].tasks = payload.tasks
    return this.columns
  }

  deleteTask(payload) {
    let columnIndex = this.columns.findIndex(function(column) {
      return column.key == payload.column.key
    })
    let newTasks = this.columns[columnIndex].tasks.filter(function(task) {
      return task.key != payload.task.key
    })
    this.columns[columnIndex].tasks = newTasks
    return this.columns
  }

  clearTasks() {
    this.columns[0].tasks = []
    this.columns[1].tasks = []
    this.columns[2].tasks = []
    return this.columns
  }
}
