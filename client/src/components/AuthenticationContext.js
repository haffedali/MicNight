import { createContext } from 'react';


const AuthenticationContext = createContext({
  isAuthenticated: false,
  authenticateUser: () => {},
  deAuthenticateUser: () => {},
});

export default AuthenticationContext;
