export const setDisplay = display => ({
  type: 'SET_DISPLAY',
  display
})

let tableID = 1
export const addTable = (name, seats=1) => ({
  type: 'ADD_TABLE',
  id: tableID++,
  name,
  seats
})

export const reassignGuest = (id, oldTableID, newTableID) => ({
  type: 'REASSIGN_GUEST',
  id,
  oldTableID,
  newTableID
})

export const removeTableGuest = (id, tableID) => ({
  type: 'REMOVE_GUEST',
  id,
  tableID
})

let guestID = 0
export const addGuest = (name, tableID) => ({
  type: 'ADD_GUEST',
  id: guestID++,
  name,
  tableID
})

export const showGuestForm = id => ({
  type: 'SHOW_GUEST_FORM',
  id
})
export const hideGuestForm = id => ({
  type: 'HIDE_GUEST_FORM',
  id
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const setDragData = (id, tableID) => ({
  type: 'SET_DRAG_DATA',
  id,
  tableID
})

export const Displays = {
  SHOW_TABLES: 'SHOW_TABLES',
  SHOW_TABLE_FORM: 'SHOW_TABLE_FORM'
}
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_ASSIGNED: 'SHOW_ASSIGNED',
  SHOW_UNASSIGNED: 'SHOW_UNASSIGNED'
}
