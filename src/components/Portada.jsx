import { Empezar } from './Icons'
import { useNavigate } from 'react-router-dom'

export function Portada () {
  const navigate = useNavigate()
  const handleclick = () => {
    navigate('/game')
  }
  return (
    <header className='flex flex-col items-center justify-around sm:bg-black gap-3'>
      <div className='sm:text-[6rem] text-[3rem] text-purple-700'><span className='text-purple-900'>Js-</span><span className='text-purple-800'>TicTac</span>Toe</div>
      <button onClick={handleclick} className='bg-blue-600 p-4 flex justify-around items-center text-white gap-3 rounded-md'>
        <Empezar />
        Empezar
      </button>
    </header>
  )
}
