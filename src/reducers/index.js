import { combineReducers } from 'redux'
import tables from './tables'
import display from './display'
import guests from './guests'
import visibilityFilter from './visibilityFilter'
import dragDropData from './dragDropData'

export default combineReducers({
  tables,
  display,
  guests,
  visibilityFilter,
  dragDropData
})
