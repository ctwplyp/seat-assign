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
    default:
      return state
  }
}

export default guests
