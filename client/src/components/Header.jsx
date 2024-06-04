// import React from 'react';
// import Auth from "../utils/auth"

const Header = () => {
  //   const logout = (event) => {
  //     event.preventDefault();
  //   Auth.logout();
  //   };

  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <h1 className="m-0" style={{ fontSize: '1.2em', maxWidth: '300px' }}>Hello, Sunshine!</h1>
        <p className="m-0">Let's Plan Together</p>
        {/* <button onClick={logout}>Logout</button> */}
      </div>
    </header>
  );
};

export default Header;
