import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {FiEye, FiChevronLeft, FiChevronRight} from 'react-icons/fi'
import {FaStar, FaStarHalf} from 'react-icons/fa'

import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'

import researches from './researches'

export default function CompletedResearches() {
  const [allResearches, setAllResearches] = useState([])

  function getNumberOfStars(rating) {
    const stars = []
    let i

    if (rating % 1 !== 0) {
      for (i = 0; i < rating - 0.5; i++) {
        stars.push(<FaStar className="goldenStar" key={i} />)
      }

      stars.push(<FaStarHalf className="goldenStar" key={i} />)

      return stars
    }

    for (i = 0; i <= rating - 0.5; i++) {
      stars.push(<FaStar className="goldenStar" key={i} />)
    }

    return stars
  }

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
            <h1 className="mt-4">Módulo de Qualidade - Pesquisas Concluídas</h1>
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
                    Pesquisas Concluídas
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
                    <td className="text-center">
                      {getNumberOfStars(research.rating)}
                    </td>
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
