import React from 'react'
import { connect } from 'react-redux'
import Table from './Table'

const mapStateToProps = state => ({
  tables: state.tables
})

const Tables = props => {
  let tables = props.tables.length ? props.tables.map(table => {
    return <Table key={table.id} name={table.name} />
  }) : "No tables yet."
  return (
    <div>
      {tables}
    </div>
  )
}

export default connect(mapStateToProps)(Tables)
