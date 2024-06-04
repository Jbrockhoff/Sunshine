import React from 'react'
import './Header.css'

const Header = () => {

  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center full-width-header">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <h1 className="m-0">Hello, Sunshine!</h1>
        <p className="m-0">Let's Plan Together</p>
      </div>
    </header>
  );
};

export default Header;
