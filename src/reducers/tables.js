const tables = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TABLE':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          seats: action.seats,
          guestIDs: [],
          guestFormDisplay: false
        }
      ]
    case 'SHOW_GUEST_FORM':
      return state.map(table =>
        (table.id === action.id) ?
          {...table, guestFormDisplay: true} :
          table
      )
    case 'HIDE_GUEST_FORM':
      return state.map(table =>
        (table.id === action.id) ?
          {...table, guestFormDisplay: false} :
          table
      )
    case 'ADD_GUEST':
      return state.map(table =>
        (table.id === action.tableID) ?
          {...table,
            guestIDs: [...table.guestIDs, action.id],
            guestFormDisplay: false
          } :
          table
      )
    case 'REASSIGN_GUEST':
      return state.map(table =>
        (table.id === action.tableID) ?
          {...table,
            guestIDs: [...table.guestIDs, action.id]
          } :
          table
      )
    default:
      return state
  }
}

export default tables
