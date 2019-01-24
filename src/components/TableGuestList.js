import React from 'react'
import { connect } from 'react-redux'
import TableGuest from './TableGuest'

const mapStateToProps = state => ({
  guests: state.guests
})

const TableGuestList = props => (
  props.guestIDs.length > 0 ?
    props.guestIDs.map(
      (guestID, i) => (
        <TableGuest key={props.guests[guestID].id}
                    row={i + 1}
                    id={props.guests[guestID].id}
                    tableID={props.guests[guestID].tableID}
                    name={props.guests[guestID].name} />
      )
    ) :
    <h4>Empty table</h4>
)

export default connect (mapStateToProps)(TableGuestList)
