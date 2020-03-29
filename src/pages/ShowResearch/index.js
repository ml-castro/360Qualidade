import React from 'react'
import {Link} from 'react-router-dom'
import {FaStar, FaStarHalf} from 'react-icons/fa'
import {FiChevronLeft, FiChevronRight, FiEdit} from 'react-icons/fi'

import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'

export default function ShowResearch() {
  function getNumberOfStars(rating) {
    const stars = []
    let i

    if (rating % 1 !== 0) {
      for (i = 0; i < rating - 0.5; i++) {
        stars.push(<FaStar className="goldenStar" key={i} size={20} />)
      }

      stars.push(<FaStarHalf className="goldenStar" key={i} size={20} />)

      return stars
    }

    for (i = 0; i <= rating - 0.5; i++) {
      stars.push(<FaStar className="goldenStar" key={i} size={20} />)
    }

    return stars
  }

  return (
    <div className="d-flex" id="wrapper">
      <Sidebar />

      <div id="page-content-wrapper">
        <Navbar />

        <div className="container-fluid">
          <div className="row p-3">
            <h1 className="mt-4">Módulo de Qualidade - Visualizar Pesquisa</h1>
          </div>

          <div className="d-flex">
            <div className="mr-auto">
              <h4>ICL - Sicoob Lagoacred Gerais</h4>
              <h5>Status: Aberta</h5>
              {getNumberOfStars(5)}
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
                    Visualizar Pesquisa
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          <div className="row p-3 mt-3">
            <ul>
              <li>Serviço: ICL</li>
              <li>Cooperativa: Sicoob Lagoacred Gerais</li>
              <li>Responsável: Mateus Lopes</li>
              <li>Data de Início: 11/07/2020</li>
              <li>Data de Término: 17/07/2020</li>
            </ul>
          </div>

          <div className="row p-3">
            <table className="table table-hover table-bordered">
              <thead>
                <tr>
                  <th scope="col" className="text-center">
                    Observação
                  </th>
                  <th scope="col" className="text-center">
                    Data
                  </th>
                  <th scope="col" className="text-center">
                    Usuário
                  </th>
                  <th scope="col" className="text-center">
                    Opções
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">Observação</td>
                  <td className="text-center">18/03/2020</td>
                  <td className="text-center">mateusl2003_00</td>
                  <td className="text-center">
                    <FiEdit />
                  </td>
                </tr>
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
