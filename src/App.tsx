import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { GlobalStyle, THEME } from './styles'
import Loading from './components/Loading'
import Navbar from './components/Navbar'
import ScrollToTop from './components/common/ScrollToTop'
import { AppProvider } from './contexts/AppContext'

const HomePage = React.lazy(() => import('./pages/HomePage'))
const CharacterDetailPage = React.lazy(() => import('./pages/CharacterDetailPage'))
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'))

const App = () => {

  return (
    <ThemeProvider theme={THEME}>
      <GlobalStyle />
      <React.Suspense fallback={<Loading />}>
        <Router>
          <AppProvider>
            <Navbar />
            <ScrollToTop />
            <Switch>
              <Route path="/" exact={true} component={HomePage} />
              <Route path="/episodies" exact={true} component={HomePage} />
              <Route path="/character/:id" exact={true} component={CharacterDetailPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </AppProvider>
        </Router>
      </React.Suspense>
    </ThemeProvider>
  )

}

export default App
