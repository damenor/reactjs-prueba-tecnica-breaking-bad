import useToggle from '../../hooks/utils/useToggle'
import useScrolled from '../../hooks/utils/useScrolled'
import ButtonBurguer from '../common/Button/ButtonBurguer'
import NavbarMenu from './NavbarMenu'
import NavbarContainer from './NavbarContainer'
import NavbarBrand from './NavbarBrand'

const Navbar = () => {

  const [isOpenMenu, toggleMenu] = useToggle(false)
  const isScrolled = useScrolled()

  return (
    <>
      <NavbarContainer isScrolled={isScrolled && !isOpenMenu}>
        <NavbarBrand to="/">
        <span>Breaking</span> Bad
        </NavbarBrand>
        <ButtonBurguer isActive={isOpenMenu} onClick={toggleMenu} />
      </NavbarContainer>
      <NavbarMenu isOpen={isOpenMenu} onClickLink={toggleMenu}/>
    </>
  )
}

export default Navbar
