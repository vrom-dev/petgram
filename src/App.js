import React from 'react'

import { Logo } from './components/Logo'
import { GlobalStyle } from './styles/GlobalStyles'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'

export const App = () => (
  <>
    <GlobalStyle />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCards />
  </>
)
