import React, { Component, PropTypes } from 'react'
import Todo from './Todo.jsx'

export default class TodoList extends Component {
  handleItemClick (e, i) {
    this.props.onTodoClick(i)
  }

  render () {
    const { todos } = this.props
    const items = todos.map((t, i) =>
      <Todo text={t.text} completed={t.completed} key={i} onClick={e => this.handleItemClick(e, i)} />
    )

    return (
      <ul>{ items }</ul>
    )
  }
}

TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired
}
