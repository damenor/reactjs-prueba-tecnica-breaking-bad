import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Character from '.'
import { ICharacter } from '../../interfaces/ICharacter'
import Slider from '../common/Slider'

type CharacterSliderProps = {
  characters: ICharacter[]
  title: string
}

const CharacterSliderTitle = styled.h2`
  padding: 0 2rem;
  color: ${({theme:{color}}) => color.secondary};
  font-size: 2.5rem;
  text-align: center;
`

const CharacterSlider = ({ characters, title }: CharacterSliderProps) => {
  return (
    <>
      <CharacterSliderTitle >{ title }</CharacterSliderTitle>
      <Slider>
        { characters.map((character: ICharacter) => {
          return (
            <Link key={character.char_id} to={{ pathname: `/character/${character.name}`, state: { character } }}>
              <Character {...character} />
            </Link>    
          )
        })}
      </Slider>
    </>
  )
}

export default CharacterSlider
