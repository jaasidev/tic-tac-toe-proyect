import { Clean, Deshacer } from './Icons'

export function Menu ({ actions }) {
  const { handleCharge, restart } = actions
  const handleclick = () => {
    handleCharge()
  }
  const handleclean = () => {
    restart()
  }
  return (
    <header className='flex items-center justify-center flex-col sm:flex-row sm:justify-between px-3 my-1'>
      <h2 className='text-[3rem] text-purple-600'>Js-TicTac</h2>
      <div className='flex gap-3 items-center'>
        <button className='p-4 rounded-full border-[0.2rem] border-orange-500' onClick={handleclick}> <Deshacer /></button>
        <button className='p-4 rounded-full border-[0.2rem] border-red-500' onClick={handleclean}> <Clean /></button>
      </div>
    </header>
  )
}
