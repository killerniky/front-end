import * as React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => (

    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">
              Open Wifi Antwerpen
          </Link>
        </div>
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/locaties">
              Locaties
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/locaties/add">
              Toevoegen
            </Link>
          </li>
        </ul>
      </div>
    </nav>
);

export default Header;
