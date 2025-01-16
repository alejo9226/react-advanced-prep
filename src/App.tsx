import './App.css'
import { OptimizedListMemoized } from './components/OptimizedListMemoized'
import { OptimizedListNotMemoized } from './components/OptimizedListNotMemoized'

function App() {

  return (
    <>
      <OptimizedListMemoized />
      <OptimizedListNotMemoized />
    </>
  )
}

export default App
