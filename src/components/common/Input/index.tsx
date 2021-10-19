import styled from 'styled-components'

const Input = styled.input`
  z-index: 998;
  max-width: 768px;
  position: fixed;
  top: ${({theme:{navbar}}) => `calc(${navbar.height})`};
  left: 50%;
  width: 100%;
  margin-bottom: 2rem;
  padding: 1rem;
  transform: translateX(-50%);
  color: ${({theme:{color}}) => color.secondary};
  font-size: 1.5rem;
  background-color: ${({theme:{color}}) => color.bgSecondary};
  border: none;
  border-radius: 8px;
`

export default Input
