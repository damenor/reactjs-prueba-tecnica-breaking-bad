import styled from 'styled-components'
import { ICharacter } from '../../interfaces/ICharacter'

// https://www.pinterest.es/pin/442126888418397931/visual-search/

const CharacterContainer = styled.div`
  position: relative;
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`

const CharacterImage = styled.div`
  min-width: 220px;
  min-height: 310px;
  width: calc(100vw * 0.20);
  height: calc(100vw * 0.25);
  border-radius: 8px;
  background-size: cover;
  background-position: center;
  transition: all 0.2s ease;
`

const CharacterData = styled.div`
  display: flex;
  flex-direction: column;
`

const CharacterName = styled.h2`
  margin-top: 1rem;
  color: ${({theme:{color}}) => color.grey200};
  font-size: 1.5rem;
`
const CharacterNickname = styled.h3`
  color: ${({theme:{color}}) => color.secondary};
  font-size: 0.9rem;
`

const Character = (character: ICharacter) => {
  
  const { name, img, nickname } = character

  return (
    <CharacterContainer>
      <CharacterData>
        <CharacterImage style={{ backgroundImage: `url(${img})` }}/>
        <CharacterName>{name}</CharacterName>
        <CharacterNickname>{nickname}</CharacterNickname>
      </CharacterData>

    </CharacterContainer>
  )
}

export default Character
