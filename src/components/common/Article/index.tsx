import styled from 'styled-components'

import { mediaQueries } from '../../../styles'
import Paragraph from '../Paragraph'

type ArticleProps = {
  title: string
  paragraph: string
}

const ArticleContainer = styled.article`
  max-width: 960px;
  margin: 0 auto;
  padding: 4rem 2rem;
  color: ${({theme:{color}}) => color.grey};
  ${mediaQueries('lg')(`
    padding: 10rem 2rem;
  `)}
  h2 {
    font-size: 2.5rem;
    margin-top: 3rem;
    margin-bottom: 1rem;
  }
`

const Article = ({ title, paragraph }: ArticleProps) => {
  return (
    <ArticleContainer>
      <h2>{ title }</h2>
      <Paragraph>{ paragraph }</Paragraph>
    </ArticleContainer>
  )
}

export default Article
