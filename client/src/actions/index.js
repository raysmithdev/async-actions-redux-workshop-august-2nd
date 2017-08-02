const RECIEVE_BESTSCORE = 'RECIEVE_BESTSCORE'
const recieveBestScore = (bestScore) => ({
  type: RECIEVE_BESTSCORE,
  bestScore
})

export const fetchBestScore = () => {
  return (dispatch) => {
    fetch('http://localhost:8080/api/bestScore')
    .then(response => response.json())
    .then(json => dispatch(recieveBestScore(json.bestScore)))
    .catch((ex) => console.log('parsing failed', ex))
  }
}

export const postBestScore = (newBestScore) => {
  return (dispatch) => {
    fetch('http://localhost:8080/api/bestScore', {
      method: 'POST',
      data: JSON.stringify({newBestScore})
    })
    .then(response => response.json())
    .then(json => dispatch(recieveBestScore(json.bestScore)))
    .catch((ex) => console.log('parsing failed', ex))
  }
}
