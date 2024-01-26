import { useState } from 'react'
import './App.css'
import router from './utils/router'
import { RouterProvider } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
