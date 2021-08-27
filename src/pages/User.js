import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'

import { Layout } from '../components/Layout'
import { SubmitButton } from '../components/SubmitButton'

export default () => {
  const { removeAuth } = useContext(AuthContext)

  return (
    <Layout
      title='Tu panel'
    >
      <SubmitButton onClick={removeAuth}>Cerrar sesión</SubmitButton>
    </Layout>
  )
}
