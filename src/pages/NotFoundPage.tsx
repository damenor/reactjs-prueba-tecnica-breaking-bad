import { Link } from 'react-router-dom'
import styled from 'styled-components'

import PageContainer from '../components/PageContainer'
import { EMOJI } from '../constants'

const NotFoundTitle = styled.h2`
  margin: 0;
  font-size: 4rem;
`

const NotFoundPage = () => {
  return (
    <PageContainer style={{ flexDirection: 'column' }}>
      <NotFoundTitle>404</NotFoundTitle>
      <NotFoundTitle>Not Found</NotFoundTitle>
      <Link to="/" style={{ fontSize: '6rem' }}>{ EMOJI.HOME }</Link>
    </PageContainer>
  )
}

export default NotFoundPage
