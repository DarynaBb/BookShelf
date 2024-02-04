import './App.css'
import router from './utils/router'
import { RouterProvider } from 'react-router-dom'
import axios from 'axios'


function App() {
  axios.defaults.baseURL = 'http://localhost:3001';
  axios.defaults.withCredentials = true;
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
