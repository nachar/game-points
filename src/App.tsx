import './components/frame/Frame.scss'
import FrameGame from './components/frame/FrameGame'
import FrameSummary from './components/frame/FrameSummary'

export default function App () {
  return (
    <div className="app-frame">
      <FrameGame />
      <FrameSummary />
    </div>
  )
}
