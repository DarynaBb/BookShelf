import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/LoginContext";
import SignUp from "./SignUp";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { isLoggedIn, login,setHasToken } = useAuth();
  const [showSignUp, setShowSignUp] = useState(false);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  

  const toggleSignUp = () => setShowSignUp(!showSignUp);
  const closeForm = () => setIsOpen(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setErrorMessage("");
  };

  const signInHandler = async (e) => {
    e.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      setErrorMessage("Please fill in all fields");
      return;
    }

    try {
      const resp = await fetch(`http://localhost:3001/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (resp.ok) {
        login(true);
        setErrorMessage("");
        navigate("/main");
        setHasToken(true);
      } else {
        setErrorMessage("Incorrect email or password");
      }
    } catch (error) {
      console.error("Error while signing in:", error);
      setErrorMessage("Error signing in. Please try again later.");
    }
  };

  return (
    <div className='relative'>
      {!isLoggedIn && !isOpen && (
        <button
          onClick={toggleDropdown}
          className='bg-gray-200 text-gray-800 text-lg px-4 py-2 hover:shadow-md'
        >
          My Account
        </button>
      )}

      {isOpen && (
        <span className='fixed top-1 right-1 mt-2 w-482 h-720 z-10 flex-shrink-0 bg-white border border-gray-300 p-4'>
          <svg
            className='fixed right-5 top-5 cursor-pointer'
            width='30'
            height='30'
            viewBox='0 0 40 40'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            onClick={closeForm}
          >
            <path
              d='M30.4992 9.51665C30.1878 9.20457 29.7651 9.02918 29.3242 9.02918C28.8834 9.02918 28.4606 9.20457 28.1492 9.51665L19.9992 17.65L11.8492 9.49999C11.5378 9.1879 11.1151 9.01251 10.6742 9.01251C10.2334 9.01251 9.8106 9.1879 9.49922 9.49999C8.84922 10.15 8.84922 11.2 9.49922 11.85L17.6492 20L9.49922 28.15C8.84922 28.8 8.84922 29.85 9.49922 30.5C10.1492 31.15 11.1992 31.15 11.8492 30.5L19.9992 22.35L28.1492 30.5C28.7992 31.15 29.8492 31.15 30.4992 30.5C31.1492 29.85 31.1492 28.8 30.4992 28.15L22.3492 20L30.4992 11.85C31.1326 11.2167 31.1326 10.15 30.4992 9.51665Z'
              fill='black'
            />
          </svg>
          <p className='text-gray-800 font-inter font-normal text-2xl mb-2'>Sign In</p>
          <hr
            style={{
              width: "434px",
              height: "1px",
              background: "#E8E8E8",
              marginBottom: "13px",
            }}
          />
          <form onSubmit={signInHandler}>
            <label htmlFor='email'>Email</label>
            <span className='block'>
              <input
                className={`mb-3 w-434 h-483 border border-solid ${
                  errorMessage ? "border-red-500" : "border-gray-300"
                }`}
                type='email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </span>
            <label htmlFor='password'>Password</label>
            <span className='block'>
              <input
                className={`mb-3 w-434 h-483 border ${
                  errorMessage ? "border-red-500" : "border-gray-300"
                }`}
                type='password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </span>
            {errorMessage && (
              <div className='text-red-500 text-sm mt-2'>{errorMessage}</div>
            )}
            <button
              type='submit'
              className={`flex-shrink-0 justify-center bg-black rounded-sm text-white px-20 py-5 ${
                errorMessage ? "cursor-not-allowed" : "cursor-pointer"
              }`}
              style={{
                width: "434px",
                height: "48px",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 300,
                lineHeight: "normal",
                opacity: errorMessage ? 0.8 : 1,
              }}
              disabled={errorMessage ? true : false}
            >SIGN IN
            </button>
            <div className='relative'>
              {!showSignUp && (
                <p>
                  Don't have an account?{" "}
                  <span
                    className='text-blue-500 px-1 cursor-pointer'
                    onClick={toggleSignUp}
                  > Create an Account
                  </span>
                </p>
              )}
              {showSignUp && <SignUp />}
            </div>
          </form>
        </span>
      )}
    </div>
  );
};

export default SignIn;
