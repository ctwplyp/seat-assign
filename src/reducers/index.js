import { combineReducers } from 'redux'
import tables from './tables'
import display from './display'
import guests from './guests'

export default combineReducers({
  tables,
  display,
  guests
})
