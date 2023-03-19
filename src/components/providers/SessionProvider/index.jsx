import React from "react";

export const SessionContext = React.createContext({
  setUser: () => {},
  user: undefined,
});

export const SessionProvider = ({ children, sessionContext }) => (
  <SessionContext.Provider value={sessionContext}>
    {children}
  </SessionContext.Provider>
);
