import React from 'react';
import logo from '../images/logo-sistema-solar.png';

class Header extends React.Component {
  render() {
    return (
      <header>
        <img src={ logo } alt="logo" />
      </header>
    );
  }
}

export default Header;
