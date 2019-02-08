import React from 'react'
import TableFooter from './TableFooter'
import TableGuestList from './TableGuestList'
import { connect } from 'react-redux'
import { reassignGuest } from '../actions'

const mapDispatchToProps = {reassignGuest}
const mapStateToProps = state => ({
  dragDropData: state.dragDropData
})

const Table = props => {
  const handleDrop = (ev) => {
    if (props.seats > props.guestIDs.length  &&
        props.dragDropData.tableID !== props.id) {
      props.reassignGuest(props.dragDropData.id, props.dragDropData.tableID, props.id)
    }
    ev.currentTarget.classList.remove("drag")
  }
  const handleDragOver = (ev) => {
    ev.preventDefault();
  }
  const handleDragEnter = ev => {
    if ( ev.currentTarget.className === "tableView" &&
         props.dragDropData.tableID !== props.id) {
      ev.currentTarget.classList.add("drag")
    }
  }
  const handleDragLeave = (ev) => {
    if (ev.relatedTarget.className === "tableContainer" ||
        ev.relatedTarget.className === "tables") {
      ev.currentTarget.classList.remove("drag")
    }
  }
  return (
    <div className="tableView"
         onDragOver={(e) => handleDragOver(e)}
         onDragEnter={(e) => handleDragEnter(e)}
         onDragLeave={(e) => handleDragLeave(e)}
         onDrop={(e) => handleDrop(e)}>
      <h2>{props.name}</h2>
      <TableGuestList guestIDs={props.guestIDs} />
      <TableFooter {...props} />
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table)
