import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setDragData } from '../actions'

const mapDispatchToProps = {setDragData}

const Guest = props => (
  <tr onDragStart ={() => props.setDragData(props.id, props.tableID)}
      draggable >
    <td>{props.row}</td>
    <td>{props.name}</td>
    <td>{props.tableID}</td>
  </tr>
)

Guest.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  setDragData: PropTypes.func.isRequired
}

export default connect(
  null,
  mapDispatchToProps
)(Guest)
