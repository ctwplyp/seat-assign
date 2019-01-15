import React from 'react'
import PropTypes from 'prop-types'

const Guest = ({name}) => (
  <li>{name}</li>
)

Guest.propTypes = {
  // onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
}

export default Guest
