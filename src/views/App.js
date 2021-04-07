import { useDispatch } from 'react-redux'
import { Route,BrowserRouter as Router, Switch } from 'react-router-dom'
import { AppRoutes } from '../assets/AppRoutes'
import NotFoundPage from './pages/NotFoundPage'
import ProjectPage from './pages/ProjectPage'

export default function App(props) {
  const dispatch = useDispatch()
  return (
    <div>
      <AppMainBar />
    </div>
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
