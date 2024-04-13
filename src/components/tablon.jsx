export function Tablon ({ children }) {
  return (
    <footer className='flex items-center justify-center my-3'>
      <div className='bg-purple-600 text-[1.5rem] p-2 rounded-md'>
        <span>TURN: {children}</span>
      </div>
    </footer>
  )
}
