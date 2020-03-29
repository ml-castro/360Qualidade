import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'

export default function RegisterResearch() {
  const [service, setService] = useState()
  const [cooperative, setCooperative] = useState('')
  const [responsible, setResponsible] = useState('')

  function handleSetService(event) {
    setService(event.target.value)
  }

  function handleSetCooperative(event) {
    setCooperative(event.target.value)
  }

  function handleSetResponsible(event) {
    setResponsible(event.target.value)
  }

  function handleFormSubmit() {
    console.log(service, cooperative, responsible)
  }

  return (
    <div className="d-flex" id="wrapper">
      <Sidebar />

      <div id="page-content-wrapper">
        <Navbar />

        <div className="container-fluid">
          <div className="row p-3">
            <h1 className="mt-4">
              Módulo de Qualidade - Cadastrar Responsável
            </h1>
          </div>

          <div className="d-flex">
            <div className="mr-auto">
              <button className="btn btn-primary mr-1">
                <Link className="linkButtons" to="/qualidade/responsaveis">
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
                    <Link to="/qualidade/pesquisas">Responsáveis</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Cadastrar Responsável
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          <div className="row p-3">
            <div className="container-fluid">
              <form onSubmit={handleFormSubmit}>
                <div className="form-row">
                  <div className="col form-group">
                    <select
                      id="inputState"
                      className="form-control"
                      onChange={handleSetService}>
                      <option value="0">E-Mail</option>
                      <option value="1">Projeto Segurança</option>
                      <option value="2">Ecossitema DEV</option>
                      <option value="3">SD-WAN</option>
                    </select>
                  </div>
                  <div className="col form-group">
                    <select
                      id="inputState"
                      className="form-control"
                      onChange={handleSetCooperative}>
                      <option value="0">Sicoob Vale do Aço</option>
                      <option value="1">Sicoob Lagoacred Gerais</option>
                      <option value="2">Sicoob Aracoop</option>
                      <option value="3">Sicoob Cofal</option>
                    </select>
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      name="responsible"
                      id="responsible"
                      placeholder="Nome do Responsável"
                      className="form-control"
                      onChange={handleSetResponsible}
                    />
                  </div>
                </div>
                <div className="form-row flex-row-reverse mt-3">
                  <button type="submit" className="btn btn-info">
                    Salvar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
