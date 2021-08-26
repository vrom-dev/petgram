import React from 'react'

import { Layout } from '../components/Layout'
import { ListOfFavs } from '../components/ListOfFavs'
import { ListOfCategories } from '../components/ListOfCategories'

export const Favs = () => (
  <>
    <ListOfCategories />
    <Layout
      title='Tus favoritos'
      subtitle='Aquí puedes encontrar tus fotografías favoritas'
    >
      <ListOfFavs />
    </Layout>
  </>
)
