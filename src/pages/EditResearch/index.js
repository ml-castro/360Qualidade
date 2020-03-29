import React from 'react'

import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'

export default function RegisterResearch() {
  return (
    <div className="d-flex" id="wrapper">
      <Sidebar />

      <div id="page-content-wrapper">
        <Navbar />

        <div className="container-fluid">
          <div className="row p-3">
            <h1 className="mt-4">Módulo de Qualidade - Cadastrar Pesquisa</h1>
          </div>

          <div className="d-flex">
            <div className="mr-auto">
              <button className="btn btn-primary mr-1">Nova</button>
              <button className="btn btn-secondary ml-1">Concluídas</button>
            </div>

            <div className="d-flex">
              <nav className="d-flex" aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#!">TI 360</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#!">Módulo de Qualidade</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Pesquisas Abertas
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          <div className="row p-3"></div>
        </div>
      </div>
    </div>
  )
}
