import { gql, useQuery } from '@apollo/client'

export function useGetFavs (id) {
  const getFavs = gql`
    query getFavs {
      favs {
        id
        categoryId
        src
        likes
        liked
        userId
      }
    }`

  const { loading, error, data } = useQuery(getFavs, { fetchPolicy: 'network-only' })

  return { loading, error, data }
}
