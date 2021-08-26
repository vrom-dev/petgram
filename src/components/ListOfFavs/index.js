import React from 'react'

import { Grid, Image, Link } from './styles'
import { useGetFavs } from '../../hooks/useGetFavs'

export const ListOfFavs = () => {
  const { data, loading, error } = useGetFavs()

  if (error) {
    return <p>Internal Server Error</p>
  }
  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <Grid>
      {data.favs.map((favPhoto) => (
        <Link key={favPhoto.id} to={`/pet/${favPhoto.id}`}>
          <Image src={favPhoto.src} />
        </Link>
      ))}
    </Grid>
  )
}
