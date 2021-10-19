import { generateRandom } from '../utils/generateRandom'

const pathImage = 'images'

export const IMAGES_BACKGROUND = [
  `${pathImage}/background_1.jpg`,
  `${pathImage}/background_2.jpg`,
  `${pathImage}/background_3.jpg`,
  `${pathImage}/background_4.jpg`,
  `${pathImage}/background_5.jpg`,
]

export const getRandomBackgroundImage = () => IMAGES_BACKGROUND[generateRandom(IMAGES_BACKGROUND.length - 1)]
