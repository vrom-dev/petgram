import { gql, useQuery } from '@apollo/client'

export function useGetPhotos (categoryId) {
  const getPhotos = gql`
    query getPhotos($categoryId: ID) {
      photos (categoryId: $categoryId){
        id
        categoryId
        src
        likes
        liked
        userId 
      }
    }`

  const { loading, error, data } = useQuery(getPhotos, { variables: { categoryId } })

  return { loading, error, data }
}
