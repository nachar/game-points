import { addItem } from '../redux/gamePointsReducer'
import { useDispatch } from 'react-redux'

interface GameButtonOptions {
  name: string
}

export default function GameButton ({ name }: GameButtonOptions) {
  const dispatch = useDispatch()
  const frameButtonText = () => {
    dispatch(addItem(name))
  }

  return (
    <button className="frame-button" onClick={frameButtonText}>{ name }</button>
  )
}
