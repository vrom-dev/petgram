import React from 'react'
import { useParams } from 'react-router-dom'

import { PhotoCard } from '../PhotoCard'
import { useGetPhotos } from '../../hooks/useGetPhotos'

export const ListOfPhotoCards = () => {
  const { id } = useParams()
  const { loading, error, data } = useGetPhotos(id)

  if (error) {
    return <p>Internal Server Error</p>
  }
  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <ul>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  )
}
