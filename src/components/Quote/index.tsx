import styled from 'styled-components'

import { IQuote } from '../../interfaces/IQuote'
import Paragraph from '../common/Paragraph'

type QuoteProps = {
  quote: IQuote
  authorImage: string
}

const QuoteContainer = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  padding: 1rem;
  border-bottom: 1px solid ${({theme:{color}}) => color.grey700};
`
const QuoteImage = styled.img`
  width: 100%;
  border-radius: 8px;
`
const QuoteData = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img {
    position: absolute;
    top: 0rem;
    right: 1rem;
    width: 64px;
    opacity: 0.25;
  }
  p {
    padding: 0 1rem;
    padding-top: 1rem;
    &:nth-child(3) {
      text-align: right;
    }
  }
`

const Quote = ({ quote, authorImage }: QuoteProps) => (
  <QuoteContainer key={quote.quote_id}>
    <QuoteImage src={authorImage} alt="author" />
    <QuoteData>
      <img src="images/quote.svg" alt="quote" />
      <Paragraph colorText="grey300">{ quote.quote }</Paragraph>
      <Paragraph colorText="grey600">{ quote.author }</Paragraph>
    </QuoteData>
  </QuoteContainer>
)

export default Quote
