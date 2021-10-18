import styled from 'styled-components'

type NavbarContainerProps = {
  isScrolled: boolean
}

const NavbarContainer = styled.nav<NavbarContainerProps>`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${({theme:{navbar}}) => navbar.height};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({theme:{color}, isScrolled}) => isScrolled && color.bg};
  padding: 1rem;
  transition: all 0.2s ease-in-out;
`

export default NavbarContainer
