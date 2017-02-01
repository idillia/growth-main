import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
  return (
    <nav className="navbar navbar-default" id="hideNav">
      <div className="container-fluid">
        <div id="navbar" className="navbar-collapse collapse"></div>
      </div>
    </nav>  
  );
} ;


export default Header;