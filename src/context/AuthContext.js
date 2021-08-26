import React, { createContext, useState } from 'react'

const AuthContext = createContext({})

export function AuthContextProvider ({ children }) {
  const [isAuth, setIsAuth] = useState(() => {
    return window.localStorage.getItem('token')
  })

  const activateAuth = (token) => {
    setIsAuth(true)
    window.localStorage.setItem('token', token)
  }

  const removeAuth = () => {
    setIsAuth(false)
    window.localStorage.removeItem('token')
  }

  return (
    <AuthContext.Provider value={{ isAuth, activateAuth, removeAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
