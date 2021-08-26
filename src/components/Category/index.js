import React from 'react'

import { Link, Image } from './styles'

const DEFAULT_IMAGE = 'https://leaderreaderjournal.com/wp-content/uploads/2021/01/dog.jpg'

export const Category = ({ cover = DEFAULT_IMAGE, path = '/', emoji = '❓' }) => (
  <Link
    to={path}
  >
    <Image src={cover} />
    {emoji}
  </Link>
)
