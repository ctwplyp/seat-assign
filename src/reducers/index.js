import { combineReducers } from 'redux'
import tables from './tables'
import display from './display'
import allGuests from './allGuests'

export default combineReducers({
  tables,
  display,
  allGuests
})
