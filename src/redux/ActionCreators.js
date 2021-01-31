import * as ActionTypes from './ActionTypes'

export const addTodo = (todo) => (dispatch) => {
  const newTodo = {
    activity: todo,
    complete: false,
  }
  dispatch({
    // Task: Create an object to dispatch. use an object in this file as an example **DONE**
    type: ActionTypes.ADD_TODO,
    payload: newTodo,
  })
}

export const toggleToDo = (id) => ({
  type: ActionTypes.TOGGLE_COMPLETE,
  payload: id,
})

export const clearAllTasks = () => ({
  type: ActionTypes.CLEAR_TASKS,
})

export const deleteAllTasks = () => ({
  type: ActionTypes.DELETE_TASKS,
  // Task: Create an object to dispatch. use an object in this file as an example **DONE**
})

export const deleteSingle = (id) => ({
  type: ActionTypes.DELETE_SINGLE,
  payload: id
})
