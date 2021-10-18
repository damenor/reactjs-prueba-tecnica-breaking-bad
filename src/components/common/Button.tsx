import styled from 'styled-components'

const Button = styled.button`
  padding: 0.5rem 1.5rem;
  color: ${({theme:{color}}) => color.dark};
  color: ${({theme:{color}}) => color.primaryContrast};
  font-size: 1.25rem;
  font-weight: 700;
  text-transform: uppercase;
  /* background: ${({theme:{color}}) => `linear-gradient(90deg, ${color.primary} 20%, ${color.secondary} 100%)`}; */
  background: ${({theme:{color}}) => color.primary};
  border: none;
  border-radius: 32px;
  border-radius: 4px;
  transition: all 0.2s ease; 
  &:active {
    transform: scale(0.96);
  }
`

export default Button
