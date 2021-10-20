import styled from 'styled-components'
import { LanguageOptionType } from '../../constants/lang'
import { useAppContext } from '../../hooks/contexts/useAppContext'

type NavbarMenuLanguageOptionsType = {
  value: LanguageOptionType
  label: string
}

type NavbarMenuLanguageProps = {
  options: NavbarMenuLanguageOptionsType[]
}

const NavbarMenuLanguageContainer = styled.div`
  position: absolute;
  bottom: 1rem;
  h2 {
    color: ${({theme:{color}}) => color.secondary};
  }
`

const NavbarMenuLanguageOptions = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 0.5rem;
  button {
    color: ${({theme:{color}}) => color.grey500};
    font-size: 2rem;
    cursor: pointer;
  }

  button.active {
    color: ${({theme:{color}}) => color.secondary};
    font-weight: bold;
  }
`

const NavbarMenuLanguage = ({ options }: NavbarMenuLanguageProps) => {

  const { language, setLanguage, labels: { navbar } } = useAppContext()
  
  return (
    <NavbarMenuLanguageContainer>
      <h2>{navbar.language}</h2>
      <NavbarMenuLanguageOptions>
        { options.map(({ value, label }, index) => (
          <button 
            key={`${value}-${index}`} 
            className={language === value ? 'active' : ''} 
            onClick={() => setLanguage(value)}>
              { label }
          </button>
        )) }
      </NavbarMenuLanguageOptions>
    </NavbarMenuLanguageContainer>
  )
}

export default NavbarMenuLanguage
