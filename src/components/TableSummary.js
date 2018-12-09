import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  tables: state.tables
})

const TableSummary = props => (
  <div className="tableSummary">
    <h1>Total # of tables: {props.tables.length}</h1>
  </div>
)


export default connect(mapStateToProps)(TableSummary)
