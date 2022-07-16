import React from "react";
import "./Navbar.scss";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();
  //   const { name, email } = user;
  return (
    <div className="navbar">
      {!isAuthenticated && <button onClick={loginWithRedirect}>Log in</button>}
      {isAuthenticated && (
        <>
          <button
            onClick={() => {
              logout({ returnTo: window.location.origin });
            }}
          >
            Log out
          </button>
          <p>Hi {user?.name}</p>
        </>
      )}
    </div>
  );
};
export default Navbar;
