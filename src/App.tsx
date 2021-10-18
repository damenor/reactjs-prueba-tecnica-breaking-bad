import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Loading from './components/common/Loading'
import Navbar from './components/Navbar'
import { GlobalStyle, THEME } from './styles'
import { 
  // useApiEpisodies,
  useApiCharacters,
} from './hooks/api'
import React, { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

// import Home from './pages/Home'
// import Detail from './pages/Detail'
const Home = React.lazy(() => import('./pages/Home'))
const Detail = React.lazy(() => import('./pages/Detail'))

const ScrollToTop = () => {
  const { pathname } = useLocation()
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

const App = () => {


  // const [characters] = useApiCharacters({
  //   limit: 5,
  //   offset: 10,
  //   isRandom: true
  // })
  
  // const [episodies] = useApiEpisodies()

  return (
    <ThemeProvider theme={THEME}>
      <GlobalStyle />
        <React.Suspense fallback={<Loading isVisible={true} />}>
          <Router>
            <Navbar />
            <ScrollToTop />
            <Switch>
              <Route path="/" exact={true} component={Home} />
              <Route path="/episodies" exact={true} component={Home} />
              <Route path="/detail/:id" exact={true} component={Detail} />
            </Switch>
          </Router>
        </React.Suspense>
    </ThemeProvider>
  )
}

export default App
