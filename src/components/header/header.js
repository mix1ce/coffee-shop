import React from 'react';
import { Link } from 'react-router-dom';

import './header.sass'

const header = () => {
  return (
    <div className="row">
      <div className="col-lg-6">
        <header className="header">
          <nav className="nav-bar">
            <Link className="nav-bar__item" to='/'><img src={process.env.PUBLIC_URL + "/logo/Logo.svg"} alt="logo" /></Link>
            <Link className="nav-bar__item" to='/coffee'>Our coffee</Link>
            <Link className="nav-bar__item" to='/goods'>For your pleasure</Link>
          </nav>
        </header>
      </div>
    </div>
  )
}

export default header;
