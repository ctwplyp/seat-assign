import React from 'react'
import { connect } from 'react-redux'
import { addGuest } from '../actions'

let input
const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: e => {
    e.preventDefault()
    dispatch(addGuest(input.value, ownProps.tableID))
    input.value = ''
  }
})

const GuestForm = props => {
  return (
    <form onSubmit={props.onSubmit}>
      <label htmlFor="guestName">Guest Name:</label>
      <input id="guestName"
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

export default connect(
  null,
  mapDispatchToProps
)(GuestForm)
