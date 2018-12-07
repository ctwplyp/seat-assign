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

export const Displays = {
  SHOW_TABLES: 'SHOW_TABLES',
  SHOW_TABLE_FORM: 'SHOW_TABLE_FORM'
}
