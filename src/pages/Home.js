import React from 'react'

import { Layout } from '../components/Layout'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'

export default () => (

  <Layout
    title='Tu app de fotos de mascotas'
    subtitle='Con Petgram puedes encontrar fotos de tus animales dométicos favoritos'
  >
    <ListOfPhotoCards />
  </Layout>
)
