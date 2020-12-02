import React from 'react';
import Header from '../header';

import './headerBaner.sass';

const HeaderBaner = ({ title }) => {
  return (
    <div className="banner">
      <div className="container">
        <Header />
        <h1 className="title title_big">{title}</h1>
      </div>
    </div>
  )
}

export default HeaderBaner
