import React from 'react'
import PropTypes from 'prop-types'

const Guest = ({row, name, id, tableID}) => (
  <tr onDragStart ={(e) => e.dataTransfer.setData("id", id)}
      draggable >
    <td>{row}</td>
    <td>{name}</td>
    <td>{tableID}</td>
  </tr>
)

const onDragStart = (ev, id) => {
  ev.dataTransfer.setData("id", id);
}

Guest.propTypes = {
  name: PropTypes.string.isRequired
}

export default Guest
