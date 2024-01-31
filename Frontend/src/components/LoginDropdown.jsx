import { useState } from "react";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";

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
        <div className="absolute right-0 mt-2 w-64 bg-white border rounded shadow-lg p-4">
          {isLoggedIn ? (
            // Zeige "My Account" Inhalt an, wenn der Benutzer eingeloggt ist
            <div>My Account Content</div>
          ) : (
            // Andernfalls zeige das Anmelde- oder Registrierungsformular an
            <>
              {isLoginPage ? (
                <LoginPage
                  handleLogin={handleLogin}
                  openRegisterDropdown={openRegisterDropdown}
                />
              ) : (
                <RegisterPage />
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
