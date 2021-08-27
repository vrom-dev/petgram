import styled from 'styled-components'

import { Link as LinkRouter } from 'react-router-dom'

export const Link = styled(LinkRouter)`
  border-radius: 8px;
  box-shadow:  0 0 8px rgba(0,0,0, .3);
  display: block;
  margin: 1px;
  overflow: hidden;
  position: relative;
  width: 100%;
  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`

export const Grid = styled.div`
  padding-top: 32px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
`

export const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  position: absolute;
`
