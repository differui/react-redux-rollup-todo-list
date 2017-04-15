import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {
  addTodo,
  completeTodo,
  setVisibilityFilter,
  VisibilityFilters
} from '../actions'
import AddTodo from '../components/AddTodo.jsx'
import TodoList from '../components/TodoList.jsx'
import Footer from '../components/Footer.jsx'

const {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
} = VisibilityFilters

class App extends Component {
  render () {
    const { dispatch, visibleTodos, visibilityFilter } = this.props

    return (
      <div>
        <AddTodo onAddClick={t => dispatch(addTodo(t))} />
        <TodoList todos={visibleTodos} onTodoClick={i => dispatch(completeTodo(i))} />
        <Footer filter={visibilityFilter} onFilterChange={f => dispatch(setVisibilityFilter(f))} />
      </div>
    )
  }
}

App.propTypes = {
  visibleTodos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  visibilityFilter: PropTypes.oneOf([
    SHOW_ALL,
    SHOW_COMPLETED,
    SHOW_ACTIVE
  ]).isRequired
}

function selectTodos (todos, filter) {
  switch (filter) {
    case SHOW_ALL:
      return todos
    case SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
  }
}

export default connect(state => {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  }
})(App)
