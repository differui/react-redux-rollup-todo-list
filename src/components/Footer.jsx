import React, { Component, PropTypes } from 'react'
import { VisibilityFilters } from '../actions'

const {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
} = VisibilityFilters

export default class Footer extends Component {
  renderFilter (filter, name) {
    const handleClick = e => {
      e.preventDefault()
      this.props.onFilterChange(filter)
    }

    if (filter === this.props.filter) {
      return name
    } else {
      return (
        <a href='#' onClick={handleClick}>{name}</a>
      )
    }
  }

  render () {
    return (
      <p>
        Show:
        { ' ' }
        { this.renderFilter(SHOW_ALL, 'All') }
        { ', ' }
        { this.renderFilter(SHOW_COMPLETED, 'Completed') }
        { ', ' }
        { this.renderFilter(SHOW_ACTIVE, 'Active') }
        { '.' }
      </p>
    )
  }
}

Footer.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.oneOf([
    SHOW_ALL,
    SHOW_ACTIVE,
    SHOW_COMPLETED
  ]).isRequired
}
