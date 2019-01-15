import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  guests: state.guests
})

const TableGuestList = props => (
  props.guestIDs.length > 0 ?
    <ol>
      {props.guestIDs.map(
        guestID => <li key={props.guests[guestID].guestID}>
          {props.guests[guestID].name}
        </li>
      )}
    </ol> :
    <h4>Empty table</h4>
)

export default connect (mapStateToProps)(TableGuestList)
