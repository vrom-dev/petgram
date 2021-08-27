// Dependencies
import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache, from } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { setContext } from '@apollo/client/link/context'

import { BrowserRouter as Router } from 'react-router-dom'
// Components
import { App } from './App'
import { AuthContextProvider } from './context/AuthContext'

const httpLink = createHttpLink({
  uri: 'https://petgram-api-inky.vercel.app/graphql'
})

const authLink = setContext((_, { headers }) => {
  const token = window.localStorage.getItem('token')
  return {
    headers: {
      ...headers,
      authorization: token ? `bearer ${token}` : ''
    }
  }
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: column ${locations[0].column} line ${locations[0].line}, Path: ${path}`
      )
    )
  }

  if (networkError) console.log(`[Network error]: ${networkError}`)

  if (networkError && networkError.result.code === 'invalid_token') {
    window.localStorage.removeItem('token')
    window.location.href = '/'
  }
})

const client = new ApolloClient({
  link: from([errorLink, authLink.concat(httpLink)]),
  cache: new InMemoryCache()
})

ReactDOM.render(
  <AuthContextProvider>
    <ApolloProvider client={client}>
      <Router>
        <App />
      </Router>
    </ApolloProvider>
  </AuthContextProvider>,

  document.getElementById('app')
)
