import React from 'react'
import {Link} from 'react-router-dom'
import {FiUsers} from 'react-icons/fi'

import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'

export default function Dashboard() {
  return (
    <div className="d-flex" id="wrapper">
      <Sidebar />

      <div id="page-content-wrapper">
        <Navbar />

        <div className="container-fluid">
          <div className="row p-3">
            <h1 className="mt-4">Módulo de Qualidade</h1>
          </div>

          <div className="row justify-content-end pr-3">
            <nav className="d-flex" aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">TI 360</li>
                <li className="breadcrumb-item">
                  <Link to="/qualidade/pesquisas">Pesquisas</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Cadastrar Pesquisa
                </li>
              </ol>
            </nav>
          </div>

          <div className="row p-3">
            <div className="col-12 col-sm-12 col-md-3 col-lg-4 col-xl-4">
              <div className="card corSicoobUm">
                <div className="card-body">
                  <div className="d-flex">
                    <div className="mr-auto">
                      <h1>150</h1>
                      <p>Pesquisas Abertas</p>
                    </div>

                    <div className="d-flex">
                      <FiUsers size={52} />
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <Link
                      className="linkButtons"
                      to="/qualidade/pesquisas/abertas">
                      Ver Mais
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-3 col-lg-4 col-xl-4">
              <div className="card corSicoobDois">
                <div className="card-body">
                  <div className="d-flex">
                    <div className="mr-auto">
                      <h1>150</h1>
                      <p>Pesquisas Concluídas</p>
                    </div>

                    <div className="d-flex">
                      <FiUsers size={52} />
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <Link
                      className="linkButtons"
                      to="/qualidade/pesquisas/abertas">
                      Ver Mais
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-3 col-lg-4 col-xl-4">
              <div className="card corSicoobTres">
                <div className="card-body">
                  <div className="d-flex">
                    <div className="mr-auto">
                      <h1>150</h1>
                      <p>Serviços 5 Estrelas</p>
                    </div>

                    <div className="d-flex">
                      <FiUsers size={52} />
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <Link
                      className="linkButtons"
                      to="/qualidade/pesquisas/abertas">
                      Ver Mais
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
