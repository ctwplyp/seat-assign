import React from 'react'
import { connect } from 'react-redux'
import AddGuestForm from './AddGuestForm'

const mapStateToProps = state => ({
  guests: state.guests
})

const Table = props => {
  let guests = props.guestIDs.length > 0 ?
    <ol>{props.guestIDs.map(id => <li>{props.guests[id].name}</li>)}</ol> :
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


export default connect (mapStateToProps)(Table)
