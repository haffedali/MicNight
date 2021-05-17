import { createContext } from 'react';

const AuthenticationContext = createContext({
  isAuthenticated: false,
  authenticateUser: () => {},
  deAuthenticateUser: () => {},
  userInfo: {},
});

export default AuthenticationContext;
