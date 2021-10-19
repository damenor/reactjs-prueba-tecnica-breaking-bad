import styled from 'styled-components'

import { THEME } from '../../../styles'

type ParagraphProps = {
  colorText?: keyof typeof THEME.color
}

const Paragraph = styled.p<ParagraphProps>`
  margin: 0;
  color: ${({ colorText = 'grey' }) => THEME.color[colorText]}
`

export default Paragraph
