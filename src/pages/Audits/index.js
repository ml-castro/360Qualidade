import React from 'react'
import {Link} from 'react-router-dom'

import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'

export default function Audits() {
  return (
    <div className="d-flex" id="wrapper">
      <Sidebar />

      <div id="page-content-wrapper">
        <Navbar />

        <div className="container-fluid">
          <div className="row p-3">
            <h1 className="mt-4">Módulo de Qualidade - Trilha de Auditoria</h1>
          </div>

          <div className="d-flex">
            <div className="mr-auto">
              <button className="btn btn-primary mr-1">
                <Link className="linkButtons" to="/qualidade">
                  Voltar
                </Link>
              </button>
            </div>

            <div className="d-flex">
              <nav className="d-flex" aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/qualidade">TI 360</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/qualidade/pesquisas">Qualidade</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Trilha de Auditoria
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