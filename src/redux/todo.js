import * as actionTypes from './ActionTypes'
const initialState = {
  todo: [
    { activity: 'First ToDo', complete: false },
    { activity: 'Second ToDo', complete: true },
  ],
}

export const ToDo = (state = initialState, action) => {
  switch (action.type) {
    // TASK: Add the cases to match with the code/*DONE*/
    case actionTypes.ADD_TODO:
      const todo = action.payload
      todo.id = state.todo.length
      return { ...state, todo: state.todo.concat(todo) }

    case actionTypes.TOGGLE_COMPLETE:
      let updatedTodo = [...state.todo]
      updatedTodo[action.payload].complete = !updatedTodo[action.payload].complete
      return { ...state, todo: updatedTodo }

    case actionTypes.CLEAR_TASKS:
      return { ...state, todo: state.todo.filter((task) => !task.complete) }

    case actionTypes.DELETE_TASKS:
      // TASK implement the final action type/*DONE*/
      return { ...state, todo: [] }

    case actionTypes.DELETE_SINGLE:
      // BONUS TASK implement the final action type/*DONE*/
      let newArr = [...state.todo];
      newArr.splice(action.payload, 1);
      return { ...state, todo: newArr }

    default:
      return state
  }
}
