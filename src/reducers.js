import { combineReducers } from 'redux'
import {
  ADD_TODO,
  COMPLETE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from './actions'

const {
  SHOW_ALL
} = VisibilityFilters

function visibilityFilter (state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function todos (state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          text: action.text,
          completed: false
        },
        ...state
      ]
    case COMPLETE_TODO:
      return state.map((t, i) =>
        i === action.index
          ? { text: t.text, completed: !t.completed }
          : t
      )
    default:
      return state
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp
