

import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import backendUrl from "../config/config.js";
import axios from "axios";

const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeForm = () => {
    setIsOpen(false);
  };

  const LoginDropdown = () => {
    const [phone, setPhone] = useState("");
    const [formData, setFormData] = useState({
      firstname: "",
      lastname: "",
      telephone: "",
      countryCode: "+49",
      email: "",
      password: "",
      confirmPassword: "",
    });
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const signUpHandler = async (e) => {
      e.preventDefault();
      const form = e.target;
      const firstname = form.firstname.value;
      const lastname = form.lastname.value;
      const telephone = phone;
      const email = form.email.value;
      const password = form.password.value;
      const confirmPassword = form.confirmPassword.value;

      // Validierungen
      if (
        firstname.trim() === "" ||
        lastname.trim() === "" ||
        telephone.trim() === "" ||
        email.trim() === "" ||
        password.trim() === "" ||
        confirmPassword.trim() === ""
      ) {
        setErrorMessage("Please fill in all fields");
        return;
      }

      if (password !== confirmPassword) {
        setErrorMessage("Passwords do not match");
        setPasswordError(true);
        return;
      }

      try {
        const resp = await axios.post(`${backendUrl}/register`, {
          firstname,
          lastname,
          telephone,
          email,
          password,
          confirmPassword,
        });

        if (resp.status === 200) {
          setFormData({
            firstname: "",
            lastname: "",
            telephone: "",
            countryCode: "+49",
            email: "",
            password: "",
            confirmPassword: "",
          });
          setEmailError(false);
          setPasswordError(false);
          setErrorMessage("");
          console.log("Erfolgreich registriert:", resp.data);
        } else {
          console.log("Error while signing up:", resp.data);
          setErrorMessage("Incorrect email or password");
          setEmailError(true);
          setPasswordError(true);
        }
      } catch (error) {
        console.log("Error while signing up:", error);
      }
    };

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
      setFormData({
        firstname: "",
        lastname: "",
        telephone: "",
        countryCode: "+49",
        email: "",
        password: "",
        confirmPassword: "",
      });
      setEmailError(false);
      setPasswordError(false);
      setErrorMessage("");
    };

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
      setEmailError(false);
      setPasswordError(false);
      setErrorMessage("");
    };

    return (
      <div className="relative">
        {!isOpen && (
          <button
            onClick={toggleDropdown}
            className="bg-gray-200 text-gray-800 px-4 py-2"
          >
            Sign up
          </button>
        )}

        {isOpen && (
          <div className="absolute right-0 mt-2 w-482 h-720 flex-shrink-0 bg-white border border-gray-300 p-4">
            <svg
              className="fixed right-4  cursor-pointer"
              width="20"
              height="20"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={closeForm}
            >
              <path
                d="M30.4992 9.51665C30.1878 9.20457 29.7651 9.02918 29.3242 9.02918C28.8834 9.02918 28.4606 9.20457 28.1492 9.51665L19.9992 17.65L11.8492 9.49999C11.5378 9.1879 11.1151 9.01251 10.6742 9.01251C10.2334 9.01251 9.8106 9.1879 9.49922 9.49999C8.84922 10.15 8.84922 11.2 9.49922 11.85L17.6492 20L9.49922 28.15C8.84922 28.8 8.84922 29.85 9.49922 30.5C10.1492 31.15 11.1992 31.15 11.8492 30.5L19.9992 22.35L28.1492 30.5C28.7992 31.15 29.8492 31.15 30.4992 30.5C31.1492 29.85 31.1492 28.8 30.4992 28.15L22.3492 20L30.4992 11.85C31.1326 11.2167 31.1326 10.15 30.4992 9.51665Z"
                fill="black"
              />
            </svg>
            <div className="text-black font-inter font-normal text-32">
              Sign up
            </div>
            <hr
              style={{
                width: "434px",
                height: "1px",
                background: "#E8E8E8",
                marginBottom: "13px",
              }}
            />

            <form onSubmit={signUpHandler}>
              <label htmlFor="firstname">First name</label>
              <div className="mb-3 w-434 h-483 border border-solid border-gray-300">
                <input
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                />
              </div>

              <label htmlFor="lastname">Last name</label>
              <div className="mb-3 w-434 h-483  border border-solid border-gray-300  ">
                <input
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                />
              </div>
              <label
                htmlFor="countryCode"
                className="block text-black font-Inter text-base font-normal"
              >
                {" "}
                Telephone number
              </label>
              <div className="mb-3 w-434 h-483 flex-shrink-0 border border-solid border-gray-300  overflow-hidden bg-white">
                <PhoneInput
                  international
                  defaultCountry="DE"
                  value={phone}
                  onChange={setPhone}
                />
              </div>
              <label htmlFor="email">Email</label>
              <div
                className={`mb-3 w-434 h-483 border border-solid ${
                  emailError ? "border-red-500" : "border-solid"
                } border-gray-300`}
              >
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <label htmlFor="password">Password</label>
              <div
                className={`mb-3 w-434 h-483 border ${
                  !passwordError ? "border-red-500" : "border-solid"
                } border-gray-300`}
              >
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <label htmlFor="confirmPassword">Confirm password</label>
              <div className="mb-3 w-434 h-483 border border-solid border-gray-300">
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
              {errorMessage && (
                <div className="text-red-500 text-sm mt-2">{errorMessage}</div>
              )}
              <button
                type="submit"
                className={`flex-shrink-0 justify-center bg-black rounded-sm text-white px-20 py-5 ${errorMessage ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                style={{
                  width: "434px",
                  height: "48px",
                  fontFamily: "Inter",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 300,
                  lineHeight: "normal",
                  opacity: errorMessage ? 0.7 : 1,
                }}
                disabled={errorMessage ? true : false}
              >
                SIGN UP
              </button>
            </form>
          </div>
        )}
      </div>
    );
  };

  return <LoginDropdown />;
};

export default MyComponent;





