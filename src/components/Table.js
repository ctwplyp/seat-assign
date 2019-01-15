import React from 'react'
import TableFooter from './TableFooter'
import TableGuestList from './TableGuestList'

const Table = props => (
  <div className="tableView">
    <h2>{props.name}</h2>
    <TableGuestList guestIDs={props.guestIDs} />
    <TableFooter {...props} />
  </div>
)



export default Table
