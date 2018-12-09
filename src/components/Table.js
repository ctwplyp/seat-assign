import React from 'react'

const Table = props => {
  let guests = props.guests.length > 0 ?
    props.guests.map(guest => <h4>{guest.name}</h4>) :
    "Empty table"
  return (
    <div className="tableView">
      <h2>{props.name}</h2>
      <div>{guests}</div>
    </div>
  )
}


export default Table
