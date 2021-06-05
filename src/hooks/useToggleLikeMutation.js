import { useMutation, gql } from '@apollo/client'
const mutationLikePhoto = gql`
mutation likeAnonymousPhoto($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input) {
      id,
      liked,
      likes
    }
  }
`
export const useToggleLikeMutation = () => {
  const [mutation, { loading: mutationLoading, error: mutationError }] = useMutation(mutationLikePhoto)
  return { mutation, mutationLoading, mutationError }
}
