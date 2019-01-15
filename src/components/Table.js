import React from 'react'
import TableFooter from './TableFooter'
import TableGuestList from './TableGuestList'
import { connect } from 'react-redux'
import { reassignGuest } from '../actions'

const mapDispatchToProps = {reassignGuest}


const Table = props => {
  const changeGuest = (guestID, tableID) => props.reassignGuest(guestID, tableID)
  const handleDrop =(ev) => {
    let guestId = parseInt(ev.dataTransfer.getData("id"));
    console.log(guestId);
    let tableId = props.id;
    console.log(guestId, tableId);
    changeGuest(guestId, tableId);
  }
  const onDragOver =(ev) => {
    ev.preventDefault();
  }
    return (
    <div className="tableView" 
    onDragOver ={(e) => onDragOver(e)}
    onDrop ={(e) => handleDrop(e)}>
      <h2>{props.name}</h2>
      <TableGuestList guestIDs={props.guestIDs} />
      <TableFooter {...props} />
    </div>
  )
}

export default connect(
  null,
  mapDispatchToProps
)(Table)
