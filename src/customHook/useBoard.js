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
  const [undo, setUndo] = useState(null)
  const newTurn = turn === TURN.X ? TURN.O : TURN.X

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

    setTurn(newTurn)
    setUndo(true)
  }

  const handleCharge = () => {
    if (winner !== null) return
    if (undo) {
      setBoard(localStorage.getItem('board').split(',').map((value) => value === '' ? null : value))
      setTurn(newTurn)
      setUndo(null)
    }
    return null
  }
  const restart = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURN.X)
    setWinner(null)
    setUndo(null)
  }

  return {
    board, handleclick, turn, handleCharge, winner, restart
  }
}
