import React, { useContext, Suspense } from 'react'
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import AuthContext from './context/AuthContext'

import { Logo } from './components/Logo'
import { GlobalStyle } from './styles/GlobalStyles'
import { NavBar } from './components/NavBar'
import { ListOfCategories } from './components/ListOfCategories'

// PAGES
const User = React.lazy(() => import('./pages/User'))
const NotRegisteredUser = React.lazy(() => import('./pages/NotRegisteredUser'))
const NotFound = React.lazy(() => import('./pages/NotFound'))
const Detail = React.lazy(() => import('./pages/Detail'))
const Home = React.lazy(() => import('./pages/Home'))
const Favs = React.lazy(() => import('./pages/Favs'))

export const App = () => {
  const { isAuth } = useContext(AuthContext)
  return (
    <Suspense
      fallback={<div />}
    >
      <GlobalStyle />
      <Logo />
      <ListOfCategories />
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
    </Suspense>
  )
}
