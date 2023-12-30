import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-sm">
        <Link to="/" className="navbar-brand">
          Finance tracker
        </Link>
        <ul className="navbar-nav mr-auto flex-row gap-2 flex-nowrap">
          <li className="nav-item">
            <NavLink to="/categories" className="nav-link">Categories</NavLink>
          </li>
          <li className="nav-item">
            <button
              className="nav-link"
            >
              Add
            </button>
          </li>
        </ul>
      
      </div>
    </nav>
  );
};

export default Navbar;