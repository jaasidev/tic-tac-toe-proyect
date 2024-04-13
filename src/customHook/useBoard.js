import { useState } from 'react'
const TURN = {
  X: '❌',
  O: '⭕'
}

const winnerCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6]
]
const checkWinner = (board) => {
  for (const combo of winnerCombos) {
    const [a, b, c] = combo
    if (board[a] && board[a] === board[b] && board[a] === board[c]) return board[a]
  }
  return null
}

export function useBoard () {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURN.X)
  const [winner, setWinner] = useState(null)
  let firsundo = false
  const handleclick = (index) => {
    if (board[index] !== null || winner) return

    const newBoard = [...board]
    localStorage.setItem('board', newBoard)
    newBoard[index] = turn
    setBoard(newBoard)

    if (newBoard.every((value) => value !== null)) {
      setWinner(false)
      return
    }

    if (checkWinner(newBoard) !== null) {
      setWinner(true)
      return
    }
    const newTurn = turn === TURN.X ? TURN.O : TURN.X
    setTurn(newTurn)
    firsundo = false
  }

  const handleCharge = () => {
    if (winner !== null) return
    if (!firsundo) {
      const newTurn = turn === TURN.X ? TURN.O : TURN.X
      setTurn(newTurn)
      firsundo = false
      setBoard(localStorage.getItem('board').split(',').map((value) => {
        return value === '' ? null : value
      }))
      firsundo = true
    }
  }
  const restart = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURN.X)
    setWinner(null)
  }

  return {
    board, handleclick, turn, handleCharge, winner, restart
  }
}
