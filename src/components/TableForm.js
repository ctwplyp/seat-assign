import React from 'react'
import { connect } from 'react-redux'
import { addTable, setDisplay, Displays } from '../actions'

const TableForm = ({ dispatch }) => {
  const boundAddTable = (tableName, seats) => dispatch(addTable(tableName.value, +seats.value))
  const boundSetDisplay = display => dispatch(setDisplay(display))
  let tableName, seats
  return (
    <form id="tableForm" onSubmit={e => {
      e.preventDefault()
      boundAddTable(tableName, seats)
      boundSetDisplay(Displays.SHOW_TABLES)
      tableName.value = ''
      seats.value = null
    }}>
      <div className="newTableInputs">
        <h2>New Table:</h2>
        <div className="inputRow">
          <label htmlFor="tableName">Table Name (optional):</label>
          <input id="tableName"
                 ref={node => tableName = node}
                 placeholder="Table Name" />
        </div>
        <div className="inputRow">
          <label htmlFor="seats">Available Seats:</label>
          <input type="number"
                 ref={node => seats = node}
                 id="seats"
                 min="1"
                 required
                 step="1" />
        </div>
      </div>
      <button type="submit">
        Create A Table
      </button>
    </form>
  )
}

export default connect()(TableForm)
