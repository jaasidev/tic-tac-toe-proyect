import { useState } from 'react'
import { Casilla } from './casilla'

const TURN = {
  X: '×',
  O: '○'
}

export function Tablero () {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, newTurn] = useState(TURN.X)
  return (
    <ul className='grid grid-cols-3 grid-rows-3 gap-2 p-2'>
      {board.map((value, index) => {
        return (
          <li key={index}>
            <Casilla>{board[index]}</Casilla>
          </li>
        )
      })}
    </ul>
  )
}
