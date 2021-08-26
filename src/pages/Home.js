import React from 'react'

import { Layout } from '../components/Layout'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'

export const Home = () => (
  <>
    <ListOfCategories />
    <Layout
      title='Tu app de fotos de mascotas'
      subtitle='Con Petgram puedes encontrar fotos de tus animales dométicos favoritos'
    >
      <ListOfPhotoCards />
    </Layout>
  </>
)
