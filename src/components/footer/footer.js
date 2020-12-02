import React from 'react';
import { Link } from 'react-router-dom';

import './footer.sass'

const footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <nav className="footer">
              <Link className="footer__item" to='/'><img src={process.env.PUBLIC_URL + "/logo/Logo_black.svg"} alt="logo" /></Link>
              <Link className="footer__item" to='/coffee'>Our coffee</Link>
              <Link className="footer__item" to='/goods'>For your pleasure</Link>
            </nav>
          </div>
        </div>
        <img className="beanslogo" src={process.env.PUBLIC_URL + "/logo/Beans_logo_dark.svg"} alt="Beans logo"></img>
      </div>
    </footer>
  )
}

export default footer;
