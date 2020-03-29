import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {FiEdit, FiChevronLeft, FiChevronRight} from 'react-icons/fi'

import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'

import responsibles from './responsibles'

export default function AllResearches() {
  const [allResponsibles, setAllResponsibles] = useState([])

  useEffect(() => {
    setAllResponsibles(responsibles)
  }, [])

  return (
    <div className="d-flex" id="wrapper">
      <Sidebar />

      <div id="page-content-wrapper">
        <Navbar />

        <div className="container-fluid">
          <div className="row p-3">
            <h1 className="mt-4">Módulo de Qualidade - Todos Responsáveis</h1>
          </div>

          <div className="d-flex">
            <div className="mr-auto">
              <button className="btn btn-primary mr-1">
                <Link
                  className="linkButtons"
                  to="/qualidade/responsaveis/cadastrar">
                  Novo
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
                    Todos Responsáveis
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          <div className="row p-3">
            <table className="table table-hover table-bordered">
              <thead>
                <tr>
                  <th scope="col" className="text-center">
                    Serviço
                  </th>
                  <th scope="col" className="text-center">
                    Cooperativa
                  </th>
                  <th scope="col" className="text-center">
                    Responsável
                  </th>
                  <th scope="col" className="text-center">
                    Opções
                  </th>
                </tr>
              </thead>
              <tbody>
                {allResponsibles.map((responsible) => (
                  <tr key={responsible.id}>
                    <td className="text-center">{responsible.service}</td>
                    <td className="text-center">{responsible.cooperative}</td>
                    <td className="text-center">{responsible.responsible}</td>
                    <td className="text-center">
                      <Link to="#!">
                        <FiEdit size={24} color={'black'} />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-end">
              <li className="page-item disabled">
                <a className="page-link" href="#!">
                  <FiChevronLeft />
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#!">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#!">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#!">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#!">
                  <FiChevronRight />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
