import React from 'react';
import Footer from '../footer';
import HeaderBaner from '../headerBaner/headerBaner';

import './errorMessage.sass'

const ErrorMessage = () => {
  return(
    <>
    <div className="content">
      <HeaderBaner title="Sorry, the page not found"/>
      <img className="error__img" src={process.env.PUBLIC_URL + "/img/404.png"} alt="error"/>
    </div>
    <Footer/>
    </>
  )
}

export default ErrorMessage;
