import styled from 'styled-components'

type ButtonBurguerProps = {
  isActive: boolean
  onClick?: () => void
}

const ButtonBurguerContainer = styled.div<ButtonBurguerProps>`
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: transform 330ms ease-out;
  ${({isActive, theme:{color}}) => isActive && `
    transform: rotate(-45deg); 
  `}
`

const ButtonBurguerLine = styled.div<ButtonBurguerProps>`
  background-color: ${({theme:{color}}) => color.grey};
  border-radius: 5px;
  width: 100%;
  height: 6px;
  &.line-menu--half {
    width: 50%;
  }
  &.line-menu--start {
    transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
    transform-origin: right;
  }
  &.line-menu--end {
    align-self: flex-end;
    transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
    transform-origin: left;
  }
  ${({isActive, theme:{color}}) => isActive && `
    background-color: ${color.danger}; 

    &.line-menu--start {
      transform: rotate(-90deg) translateX(3px);
    }

    &.line-menu--end {
      transform: rotate(-90deg) translateX(-3px);
    }
  `}
`

const ButtonBurguer = ({ isActive, onClick }: ButtonBurguerProps) => {
  return (
    <ButtonBurguerContainer isActive={isActive} onClick={onClick}>
      <ButtonBurguerLine isActive={isActive} className="line-menu--half line-menu--start"/>
      <ButtonBurguerLine isActive={isActive} />
      <ButtonBurguerLine isActive={isActive} className="line-menu--half line-menu--end"/>
    </ButtonBurguerContainer>
  )
}

export default ButtonBurguer
