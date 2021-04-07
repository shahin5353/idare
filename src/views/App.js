import { useDispatch } from 'react-redux'
import { Route,BrowserRouter as Router, Switch } from 'react-router-dom'
import { AppRoutes } from '../assets/AppRoutes'
import NotFoundPage from './pages/NotFoundPage'
import ProjectPage from './pages/ProjectPage'
import { AppContainer } from './Styles'
import './App.scss'
import './ant-style.scss'

export default function App(props) {
  const dispatch = useDispatch()
  return (
    <AppContainer>
      <AppMainBar />
    </AppContainer>
  )
}

function AppMainBar() {
  return (
  <Router>
      <Switch>
      <Route exact path={AppRoutes.DEFAULT} render={() => <ProjectPage />} />

      <Route component={NotFoundPage} />
    </Switch>
  </Router>
  )
}
