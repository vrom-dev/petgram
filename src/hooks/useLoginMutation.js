import { useMutation, gql } from '@apollo/client'

const mutationLogin = gql`
mutation login($input: UserCredentials!) {
  login (input: $input)
}
`
export const useLoginMutation = () => {
  const [loginMutation, { loading: loginMutationLoading, error: loginMutationError }] = useMutation(mutationLogin)
  return { loginMutation, loginMutationLoading, loginMutationError }
}
