import React from 'react'

import { Layout } from '../components/Layout'
import { PhotoCardWithQuery } from '../components/PhotoCardWithQuery'
import { useParams } from 'react-router-dom'

export default () => {
  const { id } = useParams()
  return (
    <Layout
      title={`Fotografía ${id}`}
    >
      <PhotoCardWithQuery />
    </Layout>
  )
}
