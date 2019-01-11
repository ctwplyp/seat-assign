import React from 'react'
import AddGuestForm from './AddGuestForm'


const Table = props => {
  let guests = props.guests.length > 0 ?
    <ol>{props.guests.map(guest => <li>{guest.name}</li>)}</ol> :
    <h4>Empty table</h4>
  return (
    <div className="tableView">
      <h2>{props.name}</h2>
      {guests}
      <footer className={props.isGuestFormVisible ? "tableFooter tableFooter__Form" : "tableFooter tableFooter__Btn"}>
        <h3>Total Seats: {props.seats}</h3>
        {props.isGuestFormVisible ?
          <AddGuestForm tableID={props.id} /> :
          <button className="button__add-guest" onClick={props.showGuestForm}>Add Guest</button>
        }
      </footer>
    </div>
  )
}


export default Table
