import { useSelector, useDispatch } from 'react-redux'
import { resetGame, bonuses, total } from '../redux/gamePointsReducer'

export default function GameResults () {
  const dispatch = useDispatch()
  const scoreboardBonuses = useSelector(bonuses)
  const scoreboardTotal = useSelector(total)

  const newGame = () => {
    dispatch(resetGame())
  }

  return (
    <div className="game-results">
      <h2>Bonuses: { scoreboardBonuses }</h2>
      <div className="game-results__total">
        <h1>Total: { scoreboardTotal + scoreboardBonuses }</h1>
        <button
          onClick={newGame}
          className="game-results__total__new-game">
          New Game
        </button>
      </div>
    </div>
  )
}
