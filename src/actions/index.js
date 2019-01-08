export const setDisplay = display => ({
  type: 'SET_DISPLAY',
  display
})

let tableID = 0
export const addTable = name => ({
  type: 'ADD_TABLE',
  id: tableID++,
  name
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

export const Displays = {
  SHOW_TABLES: 'SHOW_TABLES',
  SHOW_TABLE_FORM: 'SHOW_TABLE_FORM'
}
