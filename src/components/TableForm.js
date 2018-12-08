import React from 'react'
import { connect } from 'react-redux'
import { addTable, setDisplay, Displays } from '../actions'

const TableForm = ({ dispatch }) => {
  let input
  return (
    <form onSubmit={e => {
      e.preventDefault()
      dispatch(addTable(input.value))
      dispatch(setDisplay(Displays.SHOW_TABLES))
      input.value = ''
    }}>
      <label htmlFor="tableName">Table Name (optional):</label>
      <input id="tableName"
             ref={node => input = node}
             placeholder="Table Name" />
      <div>
        <button type="submit">
          Create A Table
        </button>
      </div>
    </form>
  )
}

export default connect()(TableForm)
