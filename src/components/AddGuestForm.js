import React from 'react'
import { connect } from 'react-redux'
// import { submitGuest } from '../actions'

const GuestForm = ({ dispatch }) => {
  let input
  return (
    <form onSubmit={e => {
      e.preventDefault()
      // dispatch(addGuest(input.value))
      // dispatch(setDisplay(Displays.SHOW_TABLES))
      input.value = ''
    }}>
      <label htmlFor="tableName">Guest Name (optional):</label>
      <input id="tableName"
             ref={node => input = node}
             placeholder="Guest Name" />
      <div>
        <button type="submit">
          Add New Guest
        </button>
      </div>
    </form>
  )
}

export default connect()(GuestForm)
