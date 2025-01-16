import './App.css'
import { MemoizedComponentAndFunctionAsProp } from './components/MemoizedComponentAndFunctionAsProp'
import { OptimizedListMemoized } from './components/OptimizedListMemoized'
import { OptimizedListNotMemoized } from './components/OptimizedListNotMemoized'

function App() {

  return (
    <>
      {/* Using useCallback and React.memo */}
      <OptimizedListMemoized />
      {/* Not using useCallback and React.memo */}
      <OptimizedListNotMemoized />
      {/* Using useCallback and React.memo w/function as prop */}
      <MemoizedComponentAndFunctionAsProp />
    </>
  )
}

export default App
