import { useMutation, gql } from '@apollo/client'

const mutationRegister = gql`
mutation signup($input: UserCredentials!) {
  signup (input: $input)
}
`
export const useRegisterMutation = () => {
  const [registerMutation, { loading: registerMutationLoading, error: registerMutationError }] = useMutation(mutationRegister)
  return { registerMutation, registerMutationLoading, registerMutationError }
}
