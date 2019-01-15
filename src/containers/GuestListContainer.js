import { connect } from 'react-redux'
import GuestList from '../components/GuestList'
import { VisibilityFilters } from '../actions'

const getVisibleGuests = (guests, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return guests
    case VisibilityFilters.SHOW_ASSIGNED:
      return guests.filter(guest => guest.tableID !== null)
    case VisibilityFilters.SHOW_UNASSIGNED:
      return guests.filter(guest => guest.tableID === null)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  guests: getVisibleGuests(state.guests, state.visibilityFilter)
})

// const mapDispatchToProps = dispatch => ({
//   toggleTodo: id => dispatch(toggleTodo(id))
// })

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(GuestList)
