import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'

import { Layout } from '../components/Layout'
import { useRegisterMutation } from '../hooks/useRegisterMutation'
import { useLoginMutation } from '../hooks/useLoginMutation'
import { UserForm } from '../components/UserForm'

export default () => {
  const { activateAuth, removeAuth } = useContext(AuthContext)
  const { registerMutation, registerMutationLoading, registerMutationError } = useRegisterMutation()
  const { loginMutation, loginMutationLoading, loginMutationError } = useLoginMutation()

  const registerError = registerMutationError && 'El usuario ya existe o hay algún problema'
  const loginError = loginMutationError && 'Los credenciales no son correctos o el usuario no existe'

  const onRegisterSubmit = ({ email, password }) => {
    const input = {
      email,
      password
    }
    const variables = { input }

    registerMutation({ variables })
      .then(({ data }) => {
        const { signup } = data
        activateAuth(signup)
      })
      .catch(() => removeAuth())
  }

  const onLoginSubmit = ({ email, password }) => {
    const input = {
      email,
      password
    }
    const variables = { input }

    loginMutation({ variables })
      .then(({ data }) => {
        const { login } = data
        activateAuth(login)
      })
      .catch(() => removeAuth(false))
  }

  return (
    <Layout
      title='Tu panel'
    >
      <UserForm
        onSubmit={onRegisterSubmit}
        title='Registrarse'
        error={registerError}
        disabled={registerMutationLoading}
      />
      <UserForm
        onSubmit={onLoginSubmit}
        title='Iniciar sesión'
        disabled={loginMutationLoading}
        error={loginError}
      />
    </Layout>
  )
}
