import styled from 'styled-components'

import Logo from '../Logo'

type LoadingProps = { 
  isVisible?: boolean
}

const LoadingContainer = styled.div<LoadingProps>`
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${({theme:{color}}) => color.bgSecondary};
  opacity: ${({isVisible}) => isVisible ? 1 : 0};
  visibility: ${({isVisible}) => isVisible ? 'visible' : 'hidden'};
  transition: all .5s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${({isVisible}) => isVisible ? 'scale(1)': 'scale(2)'};
`

const Loading = ({ isVisible }: LoadingProps = { isVisible: true }) => {
  return (
    <LoadingContainer isVisible={isVisible}>
      <Logo />
    </LoadingContainer>
  )
}

export default Loading
