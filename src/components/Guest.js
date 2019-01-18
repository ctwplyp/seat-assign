import React from 'react'
import PropTypes from 'prop-types'

const Guest = ({row, name, id, tableID}) => (
  <tr onDragStart ={(e) => handleDragStart(e, tableID, id)}
      draggable >
    <td>{row}</td>
    <td>{name}</td>
    <td>{tableID}</td>
  </tr>
)

const handleDragStart = (ev, oldTableID, id) => {
  ev.dataTransfer.setData("id", id)
  ev.dataTransfer.setData("oldTableID", oldTableID)
}

Guest.propTypes = {
  name: PropTypes.string.isRequired
}

export default Guest
