import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UserBooksContextProvider } from './context/UserBooksContext.jsx'
import { UserProfileContextProvider } from './context/UserProfileContext.jsx'
import {AuthProvider} from "./context/LoginContext.jsx"
import { ProgressBarContextProvider } from './context/ProgressBarContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProgressBarContextProvider>
    <UserBooksContextProvider>
      <UserProfileContextProvider>
      <AuthProvider>
        <App />
        </AuthProvider>
      </UserProfileContextProvider>
    </UserBooksContextProvider>
    </ProgressBarContextProvider>
  </React.StrictMode>,
)
