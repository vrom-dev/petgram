import React from 'react'

import { Layout } from '../components/Layout'
import { PhotoCardWithQuery } from '../components/PhotoCardWithQuery'
import { ListOfCategories } from '../components/ListOfCategories'
import { useParams } from 'react-router-dom'

export const Detail = () => {
  const { id } = useParams()
  return (
    <>
      <ListOfCategories />
      <Layout
        title={`Fotografía ${id}`}
      >
        <PhotoCardWithQuery />
      </Layout>
    </>
  )
}
