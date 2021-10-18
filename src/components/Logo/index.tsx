import styled from 'styled-components'

const LogoText = styled.p`
  font-size: 4rem;
  span {
    padding: 8px;
    background:green;
    border: 2px solid ${({theme:{color}}) => color.light};
    width:200px;
    height:200px;
    background: ${({theme:{color}}) => color.secondary}; 
    background: ${({theme:{color}}) => `linear-gradient(130deg, ${color.secondary} 0%, ${color.primary} 100%, ${color.dark} 90%)`};
    box-shadow:inset 0px 2px 2px rgba(50,50,50,.6); 
  }
  &.bad {
    margin: 2rem 0;
    margin-left: 4rem;
  }
`

const Logo = () => (
  <div>
    <LogoText>
      <span>Br</span>eaking  
    </LogoText>
    <LogoText className="bad">        
      <span>Ba</span>d
    </LogoText>
  </div>
)

export default Logo
