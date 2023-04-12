import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-myti min-h-screen flex flex-col justify-center items-center">
      <div className='flex'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="w-28 h-28 p-5 m-5" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="w-28 h-28 p-5 m-5" alt="React logo" />
        </a>
      </div>
      <h1 className='text-myti bg-myti text-3xl mb-5'>Vite + React</h1>
      <div className="flex flex-col justify-center items-center">
        <button className='bg-mytin text-mytin w-28 h-10 rounded-lg' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className='mb-5'>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-xl">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
