import React, { useContext } from 'react'
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import AuthContext from './context/AuthContext'

// PAGES
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { NotFound } from './pages/NotFound'
import { Detail } from './pages/Detail'
import { Home } from './pages/Home'

import { Logo } from './components/Logo'
import { GlobalStyle } from './styles/GlobalStyles'
import { NavBar } from './components/NavBar'

export const App = () => {
  const { isAuth } = useContext(AuthContext)
  return (
    <>
      <GlobalStyle />
      <Logo />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/category/:id'>
          <Home />
        </Route>
        <Route path='/pet/:id'>
          <Detail />
        </Route>
        <Route path='/login'>
          {isAuth ? <Redirect to='/' /> : <NotRegisteredUser />}
        </Route>
        <Route path='/favs'>
          {isAuth ? <Favs /> : <Redirect to='/login' />}
        </Route>
        <Route path='/user'>
          {isAuth ? <User /> : <Redirect to='/login' />}
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
      <NavBar />
    </>
  )
}
