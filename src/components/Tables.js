import React from 'react'
import { connect } from 'react-redux'
import Table from './Table'
import TableSummary from './TableSummary'
import { setDisplay, Displays, showGuestForm } from '../actions'


const mapStateToProps = state => ({
  tables: state.tables
})

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(setDisplay(Displays.SHOW_TABLE_FORM)),
  onShowGuestForm: id => dispatch(showGuestForm(id))
})

const Tables = props => {
  let tables = props.tables.length ? props.tables.map(table => {
    return <Table key={table.id}
                  name={table.name}
                  id={table.id}
                  guestIDs={table.guestIDs}
                  seats={table.seats}
                  showGuestForm={() => props.onShowGuestForm(table.id)}
                  isGuestFormVisible={table.guestFormDisplay} />
  }) : "No tables yet."
  return (
    <main>
      <TableSummary />
      <button onClick={props.onClick}>Add a table</button>
      <div className="tableContainer">
        {tables}
      </div>
    </main>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Tables)
