import React, { Component, PropTypes } from 'react'

export default class AddTodo extends Component {
  render () {
    return (
      <div>
        <input type='text' ref='input' />
        <button onClick={e => this.handleClick(e)}>Add</button>
      </div>
    )
  }

  clear () {
    this.refs.input.value = ''
  }

  handleClick (e) {
    const node = this.refs.input
    const text = node.value.trim()

    this.props.onAddClick(text)
    this.clear()
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
}
