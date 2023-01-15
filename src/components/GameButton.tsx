import './GameButton.scss'

interface GameButtonOptions {
  name: string
}

export default function GameButton ({ name }: GameButtonOptions) {
  const frameButtonText = () => {
    console.log('frameButtonText', name)
  }

  return (
    <button className="frame-button" onClick={frameButtonText}>{ name }</button>
  )
}
