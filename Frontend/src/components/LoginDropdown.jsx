
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import backendUrl from "../config/config.js";
import axios from "axios";

const LoginDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
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

    try {
      const resp = await fetch(`${backendUrl}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          lastname,
          telephone,
          email,
          password,
          confirmPassword,
        }),
      });

      if (resp.ok) {
        const data = await resp.text();
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
        console.log("Erfolgreich registriert:", data);
      } else {
        const errorData = await resp.text();
        console.log("Error while signing up:", errorData);
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
        <div className="fixed right-0 mt-2 w-{482} h-{702} flex-shrink-0 bg-white border border-gray-300 p-4">
          <svg
            className="fixed right-4"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30.4992 9.51665C30.1878 9.20457 29.7651 9.02918 29.3242 9.02918C28.8834 9.02918 28.4606 9.20457 28.1492 9.51665L19.9992 17.65L11.8492 9.49999C11.5378 9.1879 11.1151 9.01251 10.6742 9.01251C10.2334 9.01251 9.8106 9.1879 9.49922 9.49999C8.84922 10.15 8.84922 11.2 9.49922 11.85L17.6492 20L9.49922 28.15C8.84922 28.8 8.84922 29.85 9.49922 30.5C10.1492 31.15 11.1992 31.15 11.8492 30.5L19.9992 22.35L28.1492 30.5C28.7992 31.15 29.8492 31.15 30.4992 30.5C31.1492 29.85 31.1492 28.8 30.4992 28.15L22.3492 20L30.4992 11.85C31.1326 11.2167 31.1326 10.15 30.4992 9.51665Z"
              fill="black"
            />
          </svg>
          <div className="text-black text-32 font-normal flex">Sign up</div>

          <form onSubmit={signUpHandler}>
            <div className="mb-3">
              <label htmlFor="firstname">Firstname</label>
              <input
                className="w-{434} h-{48} border border-solid border-gray-300"
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="lastname">Lastname</label>
              <input
                className="w-{434} h-{48} border border-solid border-gray-300"
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="countryCode">Telephone number:</label>
              <div className="border border-gray-300">
                <PhoneInput
                  international
                  defaultCountry="DE"
                  value={phone}
                  onChange={setPhone}
                />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="email">Email</label>
              <input
                className={`w-{434} h-{48} border ${
                  emailError ? "border-red-500" : "border-solid"
                } border-gray-300`}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password">Password</label>
              <input
                className={`w-{434} h-{48} border ${
                  !passwordError ? "border-red-500" : "border-solid"
                } border-gray-300`}
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                className="w-{434} h-{48} border border-solid border-gray-300"
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
              className="w-{435} h-{56} flex-shrink-0 justify-center bg-black rounded-sm text-white px-20 py-5"
            >
              SIGN UP
            </button>
          </form>
        </div>
      )}
    </div>
  );
};



























