const initialState = {
  bestScore: 0
}

const game = (state = initialState, action) => {
  switch(action.type) {
    case 'RECIEVE_BESTSCORE':
      return {
        ...state,
        bestScore: action.bestScore
      }

    default:
      return state
  }
}

export default game
