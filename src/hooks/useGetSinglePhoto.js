import { gql, useQuery } from '@apollo/client'

export function useGetSinglePhoto (id) {
  const getSinglePhoto = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`

  const { loading, error, data } = useQuery(getSinglePhoto, { variables: { id } }
  )

  return { loading, error, data }
}
