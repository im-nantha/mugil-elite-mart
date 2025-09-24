import React, { useState, useEffect } from "react";
import Login from "../../src/components/Login/Login";

const LoginPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = sessionStorage.getItem("isLoggedIn");
    if (loggedIn === "true") setIsLoggedIn(true);
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem("isLoggedIn");
  };

  return (
    <>
      {!isLoggedIn ? (
        <section className="login">
          <div className="login-container">
            <Login onLoginSuccess={() => setIsLoggedIn(true)} />
          </div>
        </section>
      ) : (
        <div className="welcome">
          <h2>Welcome, Admin!</h2>
          <button onClick={handleLogout} className="btn-logout">
            Logout
          </button>
        </div>
      )}
    </>
  );
};

export default LoginPage;