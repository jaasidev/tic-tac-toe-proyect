import { TicTac } from './src/components/Tic-tac'
import './src/index.css'
import { BrowserRouter } from 'react-router-dom'
export function App () {
  return (
    <BrowserRouter>
      <TicTac />
    </BrowserRouter>
  )
}
