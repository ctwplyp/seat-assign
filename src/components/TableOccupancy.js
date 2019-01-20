import React from 'react'
import PropTypes from 'prop-types'

const TableOccupancy = ({ seats, occupied }) => {
  let radius = 41
  let circumference = 2 * Math.PI * radius
  let offset = occupied === 0 ? circumference : circumference * (1- occupied/seats)
  return (
    <div className="occupancy">
      <svg width="88" height="88" className="circle__svg">
        <circle cx="44"
                cy="44"
                r={radius}
                className="circle__progress circle__progress--path">
        </circle>
        <circle cx="44"
                cy="44"
                r={radius}
                className="circle__progress circle__progress--fill"
                style={{'--initialStroke': circumference, 'strokeDashoffset': offset }}>
        </circle>
      </svg>
      <div className="occupancy_fraction">
        <span className="occupied">{occupied}/</span>
        <span className="seats">{seats}</span>
      </div>
    </div>
  )
}

TableOccupancy.propTypes = {
  seats: PropTypes.number.isRequired,
  occupied: PropTypes.number.isRequired
}

export default TableOccupancy
