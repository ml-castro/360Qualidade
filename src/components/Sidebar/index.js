import React from 'react'
import {Link} from 'react-router-dom'
import {FiUsers} from 'react-icons/fi'

import Logo from '../../assets/logo.png'

export default function Sidenav() {
  return (
    <div className="bg-light border-right" id="sidebar-wrapper">
      <div className="sidebar-heading mb-3">
        <img src={Logo} alt="Sicoob Central Cecremge" />
      </div>
      <div className="list-group list-group-flush">
        <li className="list-group-item list-group-item-action bg-light mb-2">
          <Link to="/qualidade" className="sidebarLinks">
            <FiUsers className="mr-3" />
            Módulo de Qualidade
          </Link>
        </li>

        <li className="list-group-item list-group-item-action bg-light">
          <Link to="/qualidade/pesquisas">
            <FiUsers className="mr-3" />
            Pesquisas
          </Link>
        </li>
        <li className="list-group-item list-group-item-action bg-light">
          <Link to="/qualidade/pesquisas/abertas">
            <FiUsers className="mr-3" />
            Pesquisas Abertas
          </Link>
        </li>
        <li className="list-group-item list-group-item-action bg-light">
          <Link to="/qualidade/pesquisas/concluidas">
            <FiUsers className="mr-3" />
            Pesquisas Concluídas
          </Link>
        </li>

        <li className="list-group-item list-group-item-action bg-light">
          <Link to="/qualidade/pesquisas/canceladas">
            <FiUsers className="mr-3" />
            Módulo de Canceladas
          </Link>
        </li>

        <li className="list-group-item list-group-item-action bg-light mb-2">
          <Link to="/qualidade/pesquisas/cadastrar">
            <FiUsers className="mr-3" />
            Cadastrar Pesquisa
          </Link>
        </li>

        <li className="list-group-item list-group-item-action bg-light">
          <Link to="/qualidade/responsaveis">
            <FiUsers className="mr-3" />
            Responsáveis
          </Link>
        </li>
        <li className="list-group-item list-group-item-action bg-light mb-2">
          <Link to="/qualidade/responsaveis/cadastrar">
            <FiUsers className="mr-3" />
            Cadastrar Responsável
          </Link>
        </li>

        <li className="list-group-item list-group-item-action bg-light mb-2">
          <Link to="/qualidade/relatorios">
            <FiUsers className="mr-3" />
            Relatórios
          </Link>
        </li>

        <li className="list-group-item list-group-item-action bg-light mb-2">
          <Link to="/qualidade/parametros">
            <FiUsers className="mr-3" />
            Parâmetros
          </Link>
        </li>

        <li className="list-group-item list-group-item-action bg-light mb-2">
          <Link to="/qualidade/trilha-de-auditoria">
            <FiUsers className="mr-3" />
            Trilha De Auditoria
          </Link>
        </li>
      </div>
    </div>
  )
}
