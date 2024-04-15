import React from 'react';
import { Link } from 'react-router-dom';
import  Logo  from '../Logo/Logo';
import Modals from '../Modals/Modals';
import Search1 from '../SearchBar/Search1';
import './NavBar.css';

const NavBar = ({ data }) => {
  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <Logo />
        </Link>
        <Search1 data={data} className="searchbar" />
        <Modals title={'Give Feedback'} />
      </nav>
    </>
  );
};

export default NavBar;