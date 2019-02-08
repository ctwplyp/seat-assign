import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setDragData } from '../actions'

const mapDispatchToProps = {setDragData}

const TableGuest = props => (
  <div className="tableGuest_row"
    onDragStart ={() => props.setDragData(props.id, props.tableID)}
    draggable >
    <span>{props.row}</span>
    <span>{props.name}</span>
    <button className="tableGuest_btn--remove"
            onClick={() => props.onGuestRemove(props.id, props.tableID)}>
      Remove
    </button>
  </div>
)

TableGuest.propTypes = {
  name: PropTypes.string.isRequired,
  onGuestRemove: PropTypes.func.isRequired,
  setDragData: PropTypes.func.isRequired
}

export default connect(
  null,
  mapDispatchToProps
)(TableGuest)
