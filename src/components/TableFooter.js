import React from 'react'
import { connect } from 'react-redux'
import GuestForm from './AddGuestForm'
import { showGuestForm } from '../actions'

const mapDispatchToProps = dispatch => ({
  onShowGuestForm: id => dispatch(showGuestForm(id))
})

const TableFooter = props => (
  <footer className={props.guestFormDisplay ? "tableFooter tableFooter__Form" : "tableFooter tableFooter__Btn"}>
    <h3>Total Seats: {props.seats}</h3>
    {props.guestFormDisplay ?
      <GuestForm tableID={props.id} /> :
      props.guestIDs.length === props.seats ?
        <h3>Table Full!</h3> :
        <button className="button__add-guest" onClick={() => props.onShowGuestForm(props.id)}>
          Add Guest
        </button>
    }
  </footer>
)

export default connect(null, mapDispatchToProps)(TableFooter)
