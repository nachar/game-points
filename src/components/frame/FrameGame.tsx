import FrameGameHeader from './FrameGameHeader'
import GameButton from '../GameButton'
import { useSelector } from 'react-redux'
import { selectedScoreboard } from '../../redux/gamePointsReducer'

export default function FrameGame () {
  const scoreboard = useSelector(selectedScoreboard)

  return (
    <div className="app-frame__item app-frame__item--game">
      <FrameGameHeader />

      <ul className='frame-lit'>
        {
          scoreboard.map((item) =>
            <li key={item.name} className='frame-lit__item'>
              <GameButton name={item.name} />
            </li>
          )
        }
      </ul>
    </div>
  )
}
