import React from 'react'
import PropTypes from 'prop-types'
import Guest from './Guest'

const GuestList = ({ guests }) => (
  guests.length > 0 ?
    <table className="guestTable">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Table #</th>
        </tr>
      </thead>
      <tbody>
      {guests.map((guest, i) =>
        <Guest
          key={guest.id}
          {...guest}
          row={i+1}
        />
      )}
      </tbody>
    </table> :
    <h3>Empty</h3>
)

GuestList.propTypes = {
  guests: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default GuestList
