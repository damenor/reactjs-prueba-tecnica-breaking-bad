import useToggle from '../../hooks/utils/useToggle'
import useScrolled from '../../hooks/utils/useScrolled'
import ButtonBurguer from '../common/Button/ButtonBurguer'
import NavbarMenu from './NavbarMenu'
import NavbarContainer from './NavbarContainer'
import NavbarBrand from './NavbarBrand'

const NAVBAR_LINKS = [
  { path: '/episodies', label: '📺 Episodios' },
  { path: '/', label: '👫 Personajes' },
  { path: '/quotes', label: '💬 Frases' },
]

const Navbar = () => {

  const [isOpenMenu, toggleMenu] = useToggle(false)
  const isScrolled = useScrolled()

  return (
    <>
      <NavbarContainer isScrolled={isScrolled && !isOpenMenu}>
        <NavbarBrand to="/">
          { isScrolled && <><span>Breaking</span> Bad</> }
        </NavbarBrand>
        <ButtonBurguer isActive={isOpenMenu} onClick={toggleMenu} />
      </NavbarContainer>
      <NavbarMenu isOpen={isOpenMenu} links={NAVBAR_LINKS} onClickLink={toggleMenu}/>
    </>
  )
}

export default Navbar
