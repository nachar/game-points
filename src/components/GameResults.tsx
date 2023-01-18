import { useSelector } from 'react-redux'
import { selectedScoreboard } from '../redux/gamePointsReducer'

export default function GameResults () {
  const scoreboard = useSelector(selectedScoreboard)

  let total = 0
  let bonuses = 0

  scoreboard.map((item) => {
    if (item.quantity > 0) {
      if (item.bonus != null) {
        const accumulatedBonuses = Math.floor(item.quantity / item.bonus.quantity)
        if (accumulatedBonuses >= 1) {
          const itemBonuses = item.bonus.points * accumulatedBonuses
          const finalQuantity = item.quantity - (accumulatedBonuses * item.bonus.quantity)
          if (finalQuantity > 0) {
            total += item.unitPoints * finalQuantity
          }
          total += itemBonuses
          bonuses += itemBonuses
        } else {
          total += item.unitPoints * item.quantity
        }
      } else {
        total += item.unitPoints * item.quantity
      }
    }
    return item
  })

  return (
    <div>
      <h1>Lorem ipsum dolor sit amet { total }</h1>
      <h2>Bonuses { bonuses }</h2>
    </div>
  )
}
