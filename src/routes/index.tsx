import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Repository from '../pages/Repository'

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard}/>
    {/* aqui eu falo que tudo que vier depois da /:repository+ é dele mesmo */}
    <Route path="/repositories/:repository+" component={Repository}/>
  </Switch>
)

export default Routes
