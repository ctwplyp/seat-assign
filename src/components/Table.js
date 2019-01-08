import React from 'react'
import AddGuestForm from './AddGuestForm'


const Table = props => {
  let guests = props.guests.length > 0 ?
    props.guests.map(guest => <li>{guest.name}</li>) :
    "Empty table"
  return (
    <div className="tableView">
      <h2>{props.name}</h2>
      <ul>{guests}</ul>
      {props.isGuestFormVisible ?
        <AddGuestForm tableID={props.id} /> :
        <button className="button__add-guest" onClick={props.showGuestForm}>+</button>
      }
    </div>
  )
}


export default Table
