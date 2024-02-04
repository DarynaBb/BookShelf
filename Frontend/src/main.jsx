import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UserBooksContextProvider } from './context/UserBooksContext.jsx'
import { UserProfileContextProvider } from './context/UserProfileContext.jsx'
import {AuthProvider} from "./context/LoginContext.jsx"
import { TestContextProvider } from './context/TestContext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TestContextProvider>
    <UserBooksContextProvider>
      <UserProfileContextProvider>
      <AuthProvider>
        <App />
        </AuthProvider>
      </UserProfileContextProvider>
    </UserBooksContextProvider>
    </TestContextProvider>
  </React.StrictMode>,
)
