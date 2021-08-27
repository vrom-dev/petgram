import styled from 'styled-components'

export const Button = styled.button`
  background: #FD0042;
  border-radius: 3px;
  color: #fff;
  height: 32px;
  display: block;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  text-align: center;
  &[disabled] {
    opacity: .3;
  }
`
