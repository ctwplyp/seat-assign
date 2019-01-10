import { Displays } from '../actions'

const display = (state = Displays.SHOW_TABLES, action) => {
  switch (action.type) {
    case 'SET_DISPLAY':
      return action.display
    default:
      return state
  }
}

export default display
