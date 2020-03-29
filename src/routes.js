import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import AllResearches from './pages/AllResearches'
import OpenResearches from './pages/OpenResearches'
import CanceledResearches from './pages/CanceledResearches'
import CompletedResearches from './pages/CompletedResearches'
import RegisterResearch from './pages/RegisterResearch'
import EditResearch from './pages/EditResearch'
import ShowResearch from './pages/ShowResearch'
import ServiceCooperativeResponsibles from './pages/ServiceCooperativeResponsibles'
import AlResponsibles from './pages/AllResponsibles'
import RegisterResponsible from './pages/RegisterResponsible'
import Dashboard from './pages/Dashboard'
import Reports from './pages/Reports'
import Parameters from './pages/Parameters'
import Audits from './pages/Audits'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/qualidade" exact component={Dashboard} />
      <Route path="/qualidade/pesquisas" exact component={AllResearches} />
      <Route path="/qualidade/pesquisas/abertas" component={OpenResearches} />
      <Route
        path="/qualidade/pesquisas/canceladas"
        component={CanceledResearches}
      />
      <Route
        path="/qualidade/pesquisas/concluidas"
        component={CompletedResearches}
      />
      <Route
        path="/qualidade/pesquisas/cadastrar"
        component={RegisterResearch}
      />
      <Route path="/qualidade/pesquisas/editar" component={EditResearch} />
      <Route path="/qualidade/pesquisas/visualizar" component={ShowResearch} />
      <Route
        path="/qualidade/pesquisas/servico/cooperativa/responsaveis"
        component={ServiceCooperativeResponsibles}
      />
      <Route exact path="/qualidade/responsaveis" component={AlResponsibles} />
      <Route
        path="/qualidade/responsaveis/cadastrar"
        component={RegisterResponsible}
      />

      <Route path="/qualidade/relatorios" component={Reports} />
      <Route path="/qualidade/parametros" component={Parameters} />
      <Route path="/qualidade/trilha-de-auditoria" component={Audits} />
    </Switch>
  </BrowserRouter>
)

export default Routes
