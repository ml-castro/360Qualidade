import React from 'react'

import {FiChevronLeft, FiLogOut} from 'react-icons/fi'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg border-bottom corSicoobQuatro p-3">
      <FiChevronLeft color={'white'} size={24} />

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <FiLogOut color={'white'} size={24} />
          </li>
        </ul>
      </div>
    </nav>
  )
}
