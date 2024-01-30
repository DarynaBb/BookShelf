import { useState } from "react";
import LoginPage from "./LoginPage"; 
import RegisterPage from "./RegisterPage"; 

const LoginDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginPage, setIsLoginPage] = useState(true);

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

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="text-gray-800 font-semibold focus:outline-none"
      >
        {isLoginPage ? "Anmelden" : "Registrieren"}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white border rounded shadow-lg p-4">
          {isLoginPage ? (
            <LoginPage openRegisterDropdown={openRegisterDropdown} />
          ) : (
            <RegisterPage />
          )}
          <button
            onClick={toggleLoginRegister}
            className="mt-2 block text-sm text-gray-700"
          >
            {isLoginPage ? "Noch keinen Account? " : "Bereits registriert? "}
            <span className="text-blue-500">
              {isLoginPage ? "Registrieren" : "Anmelden"}
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default LoginDropdown;
