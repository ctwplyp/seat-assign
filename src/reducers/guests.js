const guests = (state = [], action) => {
  switch (action.type) {
    case 'ADD_GUEST':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          tableID: action.tableID
        }
      ]
    case 'REASSIGN_GUEST':
      return state.map(guest =>
      (guest.id === action.id ) ?
        { ...guest,
            tableID: action.newTableID
        } : guest
      )
    default:
      return state
    }
}

export default guests
