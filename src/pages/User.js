import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'

import { Layout } from '../components/Layout'
import { ListOfCategories } from '../components/ListOfCategories'
import { SubmitButton } from '../components/SubmitButton'

export const User = () => {
  const { removeAuth } = useContext(AuthContext)

  return (
    <>
      <ListOfCategories />
      <Layout
        title='Tu panel'
      >
        <SubmitButton onClick={removeAuth}>Cerrar sesión</SubmitButton>
      </Layout>
    </>
  )
}
