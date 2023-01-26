export default interface Scoreboard {
  scoreboard: Array<{
    name: string
    unitPoints: number
    quantity: number
    total: number
    bonus?: {
      quantity: number
      points: number
      total: number
    }
  }>
}
