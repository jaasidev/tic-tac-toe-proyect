import { useBoard } from '../customHook/useBoard'
import { Casilla } from './casilla'
import { Menu } from './menu'
import { Tablon } from './tablon'

export function Tablero () {
  const { board, handleclick, turn, handleCharge } = useBoard()
  return (
    <>
      <Menu actions={handleCharge} />
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
    </>
  )
}
