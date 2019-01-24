import React from 'react'
import PropTypes from 'prop-types'

const TableGuest = ({row, name, id, tableID}) => (
  <div className="tableGuest_row"
    onDragStart ={(e) => handleDragStart(e, tableID, id)}
    draggable >
    <span>{row}</span>
    <span>{name}</span>
  </div>
)

const handleDragStart = (ev, oldTableID, id) => {
  ev.dataTransfer.setData("id", id)
  ev.dataTransfer.setData("oldTableID", oldTableID)
}

TableGuest.propTypes = {
  name: PropTypes.string.isRequired
}

export default TableGuest
