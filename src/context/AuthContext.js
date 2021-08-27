import React, { createContext, useState } from 'react'

const AuthContext = createContext({})

export function AuthContextProvider ({ children }) {
  const [isAuth, setIsAuth] = useState(() => {
    const token = window.localStorage.getItem('token')
    if (token) return token
    else return false
  })

  const activateAuth = (token) => {
    setIsAuth(token)
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
