import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  scoreboard: [
    {
      name: 'A',
      unitPoints: 50,
      quantity: 0,
      bonus: {
        quantity: 3,
        points: 200
      }
    },
    {
      name: 'B',
      unitPoints: 30,
      quantity: 0,
      bonus: {
        quantity: 2,
        points: 90
      }
    },
    {
      name: 'C',
      unitPoints: 20,
      quantity: 0
    },
    {
      name: 'D',
      unitPoints: 15,
      quantity: 0
    },
    {
      name: 'E',
      unitPoints: 10,
      quantity: 0
    }
  ]
}

export const scoreSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = state.scoreboard.find(item => item.name === action.payload)
      if (item != null) item.quantity += 1
    },
    resetGame: () => initialState
  }
})

export const { addItem, resetGame } = scoreSlice.actions

export const selectedScoreboard = (state: { score: { scoreboard: any[] } }) => state.score.scoreboard

export default scoreSlice.reducer
