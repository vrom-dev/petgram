import { gql, useQuery } from '@apollo/client'

export function useGetFavs () {
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

  const { loading, error, data } = useQuery(getFavs, { fetchPolicy: 'no-cache' })

  return { loading, error, data }
}
