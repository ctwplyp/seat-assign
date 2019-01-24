import React from 'react'
import PropTypes from 'prop-types'

const TableGuest = props => (
  <div className="tableGuest_row"
    onDragStart ={(e) => handleDragStart(e, props.tableID, props.id)}
    draggable >
    <span>{props.row}</span>
    <span>{props.name}</span>
    <button className="tableGuest_btn--remove"
            onClick={() => props.onGuestRemove(props.id, props.tableID)}>
      Remove
    </button>
  </div>
)

const handleDragStart = (ev, oldTableID, id) => {
  ev.dataTransfer.setData("id", id)
  ev.dataTransfer.setData("oldTableID", oldTableID)
}

TableGuest.propTypes = {
  name: PropTypes.string.isRequired,
  onGuestRemove: PropTypes.func.isRequired
}

export default TableGuest
