import React from 'react'
import TableFooter from './TableFooter'
import TableGuestList from './TableGuestList'
import { connect } from 'react-redux'
import { reassignGuest } from '../actions'

const mapDispatchToProps = {reassignGuest}

const Table = props => {
  const handleDrop = (ev) => {
    let guestID = parseInt(ev.dataTransfer.getData("id"));
    let tableID = props.id;
    props.reassignGuest(guestID, tableID)
    ev.target.classList.remove("drag")
  }
  const onDragOver = (ev) => {
    ev.preventDefault();
  }
  const onDragEnter = (ev) => {
    if ( ev.target.className === "tableView" ) {
      ev.target.classList.add("drag")
    }
  }
  const onDragLeave = (ev) => {
    ev.target.classList.remove("drag")
  }
  return (
    <div className="tableView"
         onDragOver={(e) => onDragOver(e)}
         onDragEnter={(e) => onDragEnter(e)}
         onDragLeave={(e) => onDragLeave(e)}
         onDrop={(e) => handleDrop(e)}>
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
