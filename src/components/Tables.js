import React from 'react'
import { connect } from 'react-redux'
import Table from './Table'
import TableSummary from './TableSummary'
import { setDisplay, Displays } from '../actions'


const mapStateToProps = state => ({
  tables: state.tables
})

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(setDisplay(Displays.SHOW_TABLE_FORM))
})

const Tables = props => {
  let tables = props.tables.length ? props.tables.map(table => {
    return <Table key={table.id}
                  name={table.name}
                  id={table.id}
                  guests={table.guests} />
  }) : "No tables yet."
  return (
    <main>
      <TableSummary />
      <button onClick={props.onClick}>Add a Table</button>
      <div className="tableContainer">
        {tables}
      </div>
    </main>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Tables)
