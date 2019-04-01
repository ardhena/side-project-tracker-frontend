export class Project {
  getColumns() { return this.columns }
  setColumns(cols) { this.columns = cols }

  addTask(payload) {
    let columnIndex = this.columns.findIndex(function (column) {
      return column.key == payload.column_key
    })
    let newTask = {name: '', key: payload.task_key}

    if (payload.position == 'top') {
      this.columns[columnIndex].tasks.unshift(newTask)
    } else {
      this.columns[columnIndex].tasks.push(newTask)
    }
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
    this.columns[columnIndex].tasks[taskIndex].version = payload.task.version
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

  filterTasks(version) {
    if (version == null) {
      return this.columns
    } else {
      let columns = this.columns
      return columns.map(function(column) {
        return {
          ...column,
          tasks: column.tasks.filter(function(task) {
            return task.version == version
          })
        }
      })
    }
  }
}
