import { Over } from './Icons'

export function Finish ({ last, gana, restart }) {
  const isShow = gana !== null
  const personalizacion = isShow ? 'absolute w-96 h-60 sm:w-[500px] sm:h-96 flex flex-col justify-evenly border m-auto inset-0 items-center bg-slate-900 border-slate-600 rounded-lg' : 'hidden'
  const message = gana ? `Gano ${last}` : 'Empate'

  const handleclick = () => {
    restart()
  }

  return (
    <div className={personalizacion}>
      <span className='sm:text-[4rem] text-4xl text-white'>
        {message}
      </span>
      <button onClick={handleclick} className='border-[0.2rem] border-green-500 rounded-full text-[4rem] p-7 shadow-md'>
        <Over />
      </button>
    </div>
  )
}
