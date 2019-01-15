import React from 'react'
import PropTypes from 'prop-types'

const Guest = ({name, id}) => (
  <li onDragStart ={(e) => onDragStart(e, id)}
  draggable >{name}</li>
)

const onDragStart = (ev, id) => {
  ev.dataTransfer.setData("id", id);
}

Guest.propTypes = {
  // onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
}

export default Guest
