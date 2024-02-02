import React, { createContext, useContext, useState } from "react";
import cookie from "js-cookie"; 

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasToken, setHasToken] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };
  const handleIfUserHasToken = () => {
    console.log("handleIfUserHasToken aufgerufen");
    let JWTinfocookie = cookie.get("loginInfo");

    console.log("loginInfo cookie", JWTinfocookie);
    if (!JWTinfocookie) return;

    JWTinfocookie = JWTinfocookie.replace("j:", "");
    const cookieValueObj = JSON.parse(JWTinfocookie);
    console.log("cookieValueObj", cookieValueObj)
    const expirationInMs = new Date(cookieValueObj.expires) - new Date();
    console.log("JWT expired in", expirationInMs / 1000, "Sekunden")

    if (expirationInMs <= 0) return;

    setHasToken(true);
    setUser({ email: cookieValueObj.email });
    setMsg(`Eingeloggter User: ${cookieValueObj.email}.`);

  }
  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
