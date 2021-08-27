import React from 'react'

import { Layout } from '../components/Layout'
import { ListOfFavs } from '../components/ListOfFavs'

export default () => (
  <Layout
    title='Tus favoritos'
    subtitle='Aquí puedes encontrar tus fotografías favoritas'
  >
    <ListOfFavs />
  </Layout>
)
