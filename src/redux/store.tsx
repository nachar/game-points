import gamePointsReducer from './gamePointsReducer'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    score: gamePointsReducer
  }
})
