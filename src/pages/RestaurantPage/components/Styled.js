import { Card } from '@mui/material'
import styled from 'styled-components'

export const CardContainer = styled(Card)`
  display: flex;
  width: 328px;
  min-height: 112px;
  border: 1px solid gray;
  border-radius: 10px;
  margin: 2% auto;

  img{
      width: 120px;
      object-fit: cover;
  }

  div{
      margin: 0 5%;
  }
`