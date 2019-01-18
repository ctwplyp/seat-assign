import React from 'react'
import { connect } from 'react-redux'
import Table from './Table'
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
                  {...table} />
  }) : "No tables yet."
  return (
    <div className="tables">
      <button onClick={props.onClick}>Add a Table</button>
     <div className="tableContainer">
        {tables}
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Tables)
