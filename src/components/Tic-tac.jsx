import { Portada } from './Portada'
import { Tablero } from './tablero'
import { Routes, Route } from 'react-router-dom'

export function TicTac () {
  return (
    <>
      <Routes>
        <Route path='/' element={<Portada />} />
        <Route path='/game' element={<Tablero />} />
      </Routes>
    </>
  )
}
