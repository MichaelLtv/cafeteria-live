import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const NavBar = styled.div`
  background-color: #000000;
  color: white;
  height: 50px;
  justify-content: center;
  display:flex;
  align-items:center;
  position: fixed;
  width: 100%;
`;


export default function Navbar() {
  return (
    <React.Fragment>
      <NavBar>Cafeteria Live</NavBar>
    </React.Fragment>
  );
}
