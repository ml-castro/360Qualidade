import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {FiChevronLeft, FiChevronRight, FiEye} from 'react-icons/fi'

import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'

import researches from './researches'

export default function CanceledResearches() {
  const [allResearches, setAllResearches] = useState([])

  useEffect(() => {
    setAllResearches(researches)
  }, [])

  return (
    <div className="d-flex" id="wrapper">
      <Sidebar />

      <div id="page-content-wrapper">
        <Navbar />

        <div className="container-fluid">
          <div className="row p-3">
            <h1 className="mt-4">Módulo de Qualidade - Pesquisas Canceladas</h1>
          </div>

          <div className="d-flex">
            <div className="mr-auto">
              <button className="btn btn-primary mr-1">
                <Link
                  className="linkButtons"
                  to="/qualidade/pesquisas/cadastrar">
                  Nova
                </Link>
              </button>
              <button className="btn btn-secondary mr-1">
                <Link className="linkButtons" to="/qualidade/pesquisas/abertas">
                  Abertas
                </Link>
              </button>
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
                    Pesquisas Canceladas
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
                    Data do Cancelamento
                  </th>
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
                {allResearches.map((research) => (
                  <tr key={research.id}>
                    <td className="text-center">{research.canceledIn}</td>
                    <td className="text-center">{research.service}</td>
                    <td className="text-center">{research.cooperative}</td>
                    <td className="text-center">{research.responsible}</td>
                    <td className="text-center">
                      <a className="p-1" href="#!">
                        <FiEye size={24} color={'black'} />
                      </a>
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
