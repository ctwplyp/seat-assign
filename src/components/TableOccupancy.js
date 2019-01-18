import React from 'react'
import PropTypes from 'prop-types'

const TableOccupancy = ({ seats, occupied }) => (
  <h3>Occupancy: {occupied}/{seats}</h3>
)

TableOccupancy.propTypes = {
  seats: PropTypes.number.isRequired,
  occupied: PropTypes.number.isRequired
}

export default TableOccupancy
