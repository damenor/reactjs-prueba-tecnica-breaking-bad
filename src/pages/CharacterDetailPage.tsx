import { useLocation } from 'react-router'
import styled from 'styled-components'

import { getRandomBackgroundImage } from '../constants'

import { ICharacter } from '../interfaces/ICharacter'

const DetailBackground = styled.div`
  position: relative;
  width: 100%;
  height: 65vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(8px);
    background: rgba(32, 32, 32, 0.9);
    background: ${({theme:{color}}) => `linear-gradient(0deg, ${color.bg} 5%, rgba(39,106,86,0.35) 35%, rgba(32, 32, 32, 0.9) 90%, ${color.bg} 100%)`};
  }
`

const DetailData = styled.div`
  max-width: 960px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 1rem;
  transform: translateY(-300px);
  h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  img {
    width: 100%;
    max-width: 400px;
    border-radius: 12px;
  }
`

const CharacterDetailPage = () => {

  const { state } = useLocation<any>()
  const { character }: { character: ICharacter } = state

  console.log({character})

  return (
    <div>
      {/* <DetailBackground style={{ backgroundImage: `url(${character.img})` }} /> */}
      <DetailBackground style={{ backgroundImage: `url('/${getRandomBackgroundImage()}')` }} />
      <DetailData>
        <h2>{ character.name }</h2>
        <img src={character.img} alt="" />
        <h3>{ character.portrayed }</h3>
        <span>{ character.nickname }</span>
        { character.occupation && character.occupation.map((occupation, index) => (
          <span key={`${occupation}-${index}`}>{ occupation }</span>
        )) }
        <span>{ character.birthday }</span>
        <span>{ character.status }</span>
      </DetailData>
      {/* { JSON.stringify(character) } */}
    </div>
  )
}

export default CharacterDetailPage
