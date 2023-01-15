import FrameGameHeader from './FrameGameHeader'
import GameButton from '../GameButton'

export default function FrameGame () {
  return (
    <div className="app-frame__item app-frame__item--game">
      <FrameGameHeader />

      <ul className='frame-lit'>
        <li className='frame-lit__item'>
          <GameButton name='A' />
        </li>
        <li className='frame-lit__item'>
          <GameButton name='B' />
        </li>
        <li className='frame-lit__item'>
          <GameButton name='C' />
        </li>
        <li className='frame-lit__item'>
          <GameButton name='D' />
        </li>
      </ul>
    </div>
  )
}
