import { useSelector } from 'react-redux'
import { selectedScoreboard } from '../redux/gamePointsReducer'

export default function SummaryTable () {
  const scoreboard = useSelector(selectedScoreboard)

  return (
    <table className='summary-table'>
      <thead>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Score</th>
        </tr>

      </thead>
      <tbody>
        {
          scoreboard.map(({ name, quantity, unitPoints }) => {
            if (quantity > 0) {
              return (
                <tr key={name}>
                  <td>{ name }</td>
                  <td>{ quantity }</td>
                  <td>{ unitPoints}</td>
                </tr>
              )
            } else return null
          })
        }
      </tbody>
    </table>
  )
}
