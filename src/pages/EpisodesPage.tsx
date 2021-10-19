import { useEffect } from 'react'
import Loading from '../components/Loading'
import { useAppContext } from '../hooks/contexts/useAppContext'

const EpisodesPage = () => {

  const { fetchEpisodes, episodes } = useAppContext()

  useEffect(() => {
    (async() => await fetchEpisodes())()
    console.log({episodes})
  }, [fetchEpisodes])
  
  return (
    <div>
      <Loading isVisible={episodes.length ===0} />
      EpisodePage
    </div>
  )
}

export default EpisodesPage
