import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {FiEye, FiChevronLeft, FiChevronRight} from 'react-icons/fi'

import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'

import researches from './researches'

export default function AllResearches() {
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
            <h1 className="mt-4">Módulo de Qualidade - Todas Pesquisas</h1>
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
              <button className="btn btn-warning mr-1">
                <Link
                  className="linkButtons"
                  to="/qualidade/pesquisas/concluidas">
                  Concluidas
                </Link>
              </button>
              <button className="btn btn-info mr-1">
                <Link
                  className="linkButtons"
                  to="/qualidade/pesquisas/canceladas">
                  Canceladas
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
                    <Link to="/qualidade/pesquisas">Pesquisas</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Todas Pesquisas
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
                    Data de Conclusão
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
                    Classificação
                  </th>
                  <th scope="col" className="text-center">
                    Opções
                  </th>
                </tr>
              </thead>
              <tbody>
                {allResearches.map((research) => (
                  <tr key={research.id}>
                    <td className="text-center">{research.endDate}</td>
                    <td className="text-center">{research.service}</td>
                    <td className="text-center">{research.cooperative}</td>
                    <td className="text-center">{research.responsible}</td>
                    <td className="text-center">{research.rating}</td>
                    <td className="text-center">
                      <Link to="#!">
                        <FiEye size={24} color={'black'} />
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
