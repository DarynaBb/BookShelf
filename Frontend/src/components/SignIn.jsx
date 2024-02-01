import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/LoginContext";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { isLoggedIn, login } = useAuth();
  const [showSignUp, setShowSignUp] = useState(false);
  const navigate = useNavigate();

  const toggleSignUp = () => {
    setShowSignUp(!showSignUp);
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

      if (resp.status === 200) {
        login(true);
        setErrorMessage("");
        navigate("/main");
      } else {
        setErrorMessage("Incorrect email or password");
      }
    } catch (error) {
      console.log("Error while signing in:", error);
    }
  };

  return (
    <div className='relative'>
      <button className='bg-gray-200 text-gray-800 text-lg px-4 py-2 hover:shadow-md'>
        Sign In
      </button>
      {!isLoggedIn && (
        <div className='fixed top-1 right-1 mt-2 w-482 h-720 z-10 flex-shrink-0 bg-white border border-gray-300 p-4'>
          <div className='text-gray-800 font-inter font-normal text-2xl mb-2'>
            Sign In
          </div>
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
            >
              SIGN IN
            </button>
            <div className='relative'>
              {!showSignUp && (
               <p> Don't have an account? <span
                  className='text-blue-500 px-1 cursor-pointer'
                  onClick={toggleSignUp}
                >  Create an Account
                </span></p>
              )}
              {showSignUp && <SignUp />}
            
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default SignIn;
