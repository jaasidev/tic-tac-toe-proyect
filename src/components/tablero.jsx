import { useBoard } from '../customHook/useBoard'
import { Casilla } from './casilla'
import { Finish } from './finishCard'
import { Menu } from './menu'
import { Tablon } from './tablon'

export function Tablero () {
  const { board, handleclick, turn, handleCharge, winner, restart } = useBoard()
  return (
    <>
      <Menu actions={{ handleCharge, restart }} />
      <ul className='grid grid-cols-3 grid-rows-3 gap-2 p-2 self-center'>
        {board.map((value, index) => {
          return (
            <li key={index}>
              <Casilla index={index} handle={handleclick}>{board[index]}</Casilla>
            </li>
          )
        })}
      </ul>
      <Tablon>
        {turn}
      </Tablon>
      <Finish last={turn} gana={winner} restart={restart} />
    </>
  )
}
