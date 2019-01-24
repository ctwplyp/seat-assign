import React from 'react'
import { connect } from 'react-redux'
import TableGuest from './TableGuest'
import {removeTableGuest} from '../actions'

const mapStateToProps = state => ({
  guests: state.guests
})

const mapDispatchToProps = dispatch => ({
  handleGuestRemove: (id, tableID) => dispatch(removeTableGuest(id, tableID))
})

const TableGuestList = props => (
  props.guestIDs.length > 0 ?
    props.guestIDs.map(
      (guestID, i) => (
        <TableGuest key={props.guests[guestID].id}
                    row={i + 1}
                    id={props.guests[guestID].id}
                    tableID={props.guests[guestID].tableID}
                    name={props.guests[guestID].name}
                    onGuestRemove={props.handleGuestRemove} />
      )
    ) :
    <h4>Empty table</h4>
)

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(TableGuestList)
