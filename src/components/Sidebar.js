import React from 'react'
import { connect } from 'react-redux'
import GuestListContainer from '../containers/GuestListContainer'
import GuestForm from './AddGuestForm'
import FilterNav from './FilterNav'

const mapStateToProps = state => ({
  tables: state.tables,
  guests: state.guests
})

const Sidebar = props => (
  <aside>
    <div className="tableTotal">
      <h3>Total # of tables: {props.tables.length}</h3>
    </div>
    <div className="guestTotal">
      <h3>Total # of guests: {props.guests.length}</h3>
    </div>
    <FilterNav />
    <GuestListContainer />
    <div className="add_unassigned">
      <h2>Add Unassigned Guest:</h2>
      <GuestForm tableID={null}/>
    </div>
  </aside>
)


export default connect(mapStateToProps)(Sidebar)
