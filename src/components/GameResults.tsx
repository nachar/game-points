import { useSelector } from 'react-redux'
import { selectedScoreboard } from '../redux/gamePointsReducer'

export default function GameResults () {
  const scoreboard = useSelector(selectedScoreboard)
  const bonuses = scoreboard.reduce((accumulator, item) =>
    (item.bonus) ? accumulator + item.bonus.total : accumulator + 0, 0)
  const total = scoreboard.reduce((accumulator, item) => accumulator + item.total, 0)

  return (
    <div>
      <h1>Total: { total + bonuses }</h1>
      <h2>Bonuses: { bonuses }</h2>
    </div>
  )
}
