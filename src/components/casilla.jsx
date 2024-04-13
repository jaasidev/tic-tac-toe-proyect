export function Casilla ({ children, index, handle }) {
  const handleclick = () => {
    handle(index)
  }
  return (
    <div onClick={handleclick} className='sm:w-48 sm:h-48 h-28 w-28  rounded-md shadow-md bg-slate-800 flex items-center justify-center text-[8rem] cursor-pointer'>
      {children}
    </div>
  )
}
