import { useState } from "react";
import Login from "./LogIn";
import SignUp from "./SignUp";

const LoginDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleLoginRegister = () => {
    setIsLoginPage(!isLoginPage);
  };

  const openRegisterDropdown = () => {
    setIsOpen(true);
    setIsLoginPage(false);
  };

  const handleLogin = () => {
    // Hier füge die Logik für den Login hinzu
    setIsLoggedIn(true);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="text-gray-800 font-semibold focus:outline-none"
      >
        {isLoggedIn ? "My Account" : isLoginPage ? "Log in" : "Sign up"}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 z-10  bg-white text-textWhite shadow-md shadow-stone-950/50 py-10 px-5 rounded-xl">
          {isLoggedIn ? (
            // Zeige "My Account" Inhalt an, wenn der Benutzer eingeloggt ist
            <div>My Account Content</div>
          ) : (
            // Andernfalls zeige das Anmelde- oder Registrierungsformular an
            <>
              {isLoginPage ? (
                <Login
                  handleLogin={handleLogin}
                  openRegisterDropdown={openRegisterDropdown}
                />
              ) : (
                <SignUp />
              )}
              <button
                onClick={toggleLoginRegister}
                className="mt-2 block text-sm text-gray-700"
              >
                {isLoginPage
                  ? "Don’t have an account? "
                  : "Bereits registriert? "}
                <span className="text-blue-500">
                  {isLoginPage ? "Sign up" : "Log in"}
                </span>
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default LoginDropdown;
