import React from 'react'
import { connect } from 'react-redux'
import { Displays } from '../actions'
import Tables from '../components/Tables'
import TableForm from '../components/TableForm'

const mapStateToProps = state => ({
  display: state.display
})

const Display = props => {
  switch (props.display) {
    case Displays.SHOW_TABLES:
      return <Tables />
    case Displays.SHOW_TABLE_FORM:
      return <TableForm />
    default:
      throw new Error('Unknown Display: ' + props.display)
  }
}

export default connect(
  mapStateToProps
)(Display)
