const tables = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TABLE':
      return [
        ...state,
        {id: action.id}
      ]
    default:
      return state
  }
}

export default tables
