export function Tablon ({ children }) {
  return (
    <footer className='flex items-center justify-center my-3'>
      <div className='border-purple-600 text-purple-600 border-[0.5rem] rounded-full text-[4rem] px-7 shadow-md shadow-slate-800'>
        {children}
      </div>
    </footer>
  )
}
