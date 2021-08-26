import React from 'react'

import { Helmet } from 'react-helmet'
import { Div } from './styles'

export const Layout = ({ children, title, subtitle }) => (
  <>
    <Helmet>
      {title && <title>{title} | Petgram 🐶</title>}
      {subtitle && <meta name='description' content={subtitle} />}
    </Helmet>
    <Div>
      {/* {title && <h1>{title}</h1>}
      {subtitle && <h2>{subtitle}</h2>} */}
      {children}
    </Div>
  </>
)
