import React from 'react'
import { useParams } from 'react-router-dom'

import { PhotoCard } from '../PhotoCard'
import { useGetSinglePhoto } from '../../hooks/useGetSinglePhoto'

export const PhotoCardWithQuery = () => {
  const { id } = useParams()

  const { loading, error, data } = useGetSinglePhoto(id)

  if (error) {
    return <p>Internal Server Error</p>
  }
  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <PhotoCard {...data.photo} />
  )
}
