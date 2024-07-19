import './App.css';
import { useEffect } from 'react'

import { ContextHolder } from '@frontegg/rest-api';
import { AdminPortal, useAuth, useLoginWithRedirect } from "@frontegg/react";

function App() {

  const { isAuthenticated, user } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();

  // Uncomment this to redirect to login automatically
  useEffect(() => {
    if (!isAuthenticated) {
      const timer = setTimeout(() => {
        loginWithRedirect();
      }, 3000); // Delay of 1000 milliseconds (1 second)
  
      // Cleanup the timer if the component unmounts or the dependencies change
      return () => clearTimeout(timer);
    }
  }, [isAuthenticated, loginWithRedirect]);

  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  };

  // admin user
  const handleClick = () => {
    AdminPortal.show()
  }

  return (
    <div className="App">
      {isAuthenticated ? (
        <div className='card'>
          <div>
            <img src={user?.profilePictureUrl} alt={user?.name} />
          </div>
          <div className="detail">
            <span className="heading">Name: {user?.name}</span>
            <span className="heading">Email: {user?.email}</span>
          </div>
          <div>
            <button onClick={logout} className="button">Click to logout</button>

            <button onClick={handleClick} className="button">Settings</button>
          </div>
        </div>
      ) :
        (
          <div>
            <button
              onClick={() => loginWithRedirect()}
              className="button">
              Click me to Login
            </button>
          </div>
        )}
    </div>
  );
}

export default App;