import React from 'react'
import {Link} from 'react-router-dom'

import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'

export default function Parameters() {
  return (
    <div className="d-flex" id="wrapper">
      <Sidebar />

      <div id="page-content-wrapper">
        <Navbar />

        <div className="container-fluid">
          <div className="row p-3">
            <h1 className="mt-4">Módulo de Qualidade - Parâmetros</h1>
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
                    Parâmetros
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
