import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavbarBrand = styled(Link)`
  display: block;
  font-size: 1.5rem;
  text-transform: uppercase;
  span {
    color: ${({theme:{color}}) => color.primary};
  }
`

export default NavbarBrand
