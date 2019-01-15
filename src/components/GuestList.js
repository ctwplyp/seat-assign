import React from 'react'
import PropTypes from 'prop-types'
import Guest from './Guest'

const GuestList = ({ guests }) => (
  guests.length > 0 ?
    <ol>
      {guests.map(guest =>
        <Guest
          key={guest.id} 
          {...guest}
          // onClick={() => assignGuest(guest.id)}
        />
      )}
    </ol> :
    <h3>Empty</h3>
)

GuestList.propTypes = {
  guests: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired
  // toggleTodo: PropTypes.func.isRequired
}

export default GuestList
