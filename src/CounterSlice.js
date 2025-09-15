import { createSlice } from '@reduxjs/toolkit'

const savedCounter = JSON.parse(localStorage.getItem('counter')) || 0
const savedHistory = JSON.parse(localStorage.getItem('history')) || []

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: savedCounter, history: savedHistory },
  reducers: {
    increment: (state) => {
      state.value += 1
      state.history.push(state.value)
      localStorage.setItem('counter', JSON.stringify(state.value))
      localStorage.setItem('history', JSON.stringify(state.history))
    },
    decrement: (state) => {
      state.value -= 1
      state.history.push(state.value)
      localStorage.setItem('counter', JSON.stringify(state.value))
      localStorage.setItem('history', JSON.stringify(state.history))
    },
    reset: (state) => {
      state.value = 0
      state.history.push(state.value)
      localStorage.setItem('counter', JSON.stringify(state.value))
      localStorage.setItem('history', JSON.stringify(state.history))
    },
    clearHistory: (state) => {
      state.history = []
      localStorage.setItem('history', JSON.stringify(state.history))
    },
    incrementByStep: (state, action) => {
      state.value += action.payload
      state.history.push(state.value)
      localStorage.setItem('counter', JSON.stringify(state.value))
      localStorage.setItem('history', JSON.stringify(state.history))
    },
  },
})

export const { increment, decrement, reset, clearHistory, incrementByStep } = counterSlice.actions
export default counterSlice.reducer
