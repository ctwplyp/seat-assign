const dragDropData = (state = null, action) => {
  switch (action.type) {
    case 'SET_DRAG_DATA':
      return {id: action.id, tableID: action.tableID}
    default:
      return state
    }
}

export default dragDropData
