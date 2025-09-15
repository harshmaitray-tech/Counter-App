import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, clearHistory, incrementByStep } from './counterSlice'
import { toggleTheme } from './themeSlice'
import './App.css'

function App() {
  const count = useSelector((state) => state.counter.value)
  const history = useSelector((state) => state.counter.history)
  const theme = useSelector((state) => state.theme.mode)
  const dispatch = useDispatch()

  return (
    <div className={`app ${theme}`}>
      <div className="container">
        <h1 className="app-header">🚀 Professional Counter</h1>
        <h2 className="counter-value">{count}</h2>

        <div className="btn-group">
          <button className="increase" onClick={() => dispatch(increment())}>+1</button>
          <button className="decrease" onClick={() => dispatch(decrement())}>-1</button>
          <button className="reset" onClick={() => dispatch(reset())}>Reset</button>
          <button className="clear" onClick={() => dispatch(clearHistory())}>Clear History</button>
        </div>

        <div className="btn-group">
          <button className="step" onClick={() => dispatch(incrementByStep(5))}>+5</button>
          <button className="step" onClick={() => dispatch(incrementByStep(10))}>+10</button>
        </div>

        <div className="btn-group">
          <button className="theme-toggle" onClick={() => dispatch(toggleTheme())}>
            {theme === 'light' ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </button>
        </div>

        <div className="history">
          <h3>📜 History</h3> 
          <ul>
            {history.length === 0 ? (
              <li>No history yet...</li>
            ) : (
              history.map((val, idx) => <li key={idx}>{val}</li>)
            )}
          </ul>
        </div>

        <div className="footer">
          Created by <span className="creator-name">Harsh Maitray</span>
        </div>
      </div>
    </div>
  )
}

export default App
