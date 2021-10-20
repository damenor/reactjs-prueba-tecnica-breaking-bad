import styled from 'styled-components'

const PageContainer = styled.div`
  display: flex; 
  align-items: center; 
  justify-content: center; 
  min-height: 100vh;
  padding-top: ${({theme:{navbar}}) => `calc(${navbar.height} + 2rem)`};
`

export default PageContainer
