// import { useState } from "react";
// import PhoneInput from "react-phone-number-input";
// import "react-phone-number-input/style.css";
// //import backendUrl from "../config/config.js";
// //import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Logout from "./Logout";
// import { useAuth } from "../context/LoginContext";

// const SignUp = () => {
//   const [loggedin, setLoggedin] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const [phone, setPhone] = useState("");
//   const [formData, setFormData] = useState({
//     firstname: "",
//     lastname: "",
//     telephone: "",
//     countryCode: "+49",
//     email: "",
//     password: "",
//   });
//   const [emailError, setEmailError] = useState(false);
//   const [passwordError, setPasswordError] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const { isLoggedIn, login } = useAuth();
//   const navigate = useNavigate();
//   const closeForm = () => {
//     setIsOpen(false);
//   };
//   const SignUpHandler = async (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const firstname = form.firstname.value;
//     const lastname = form.lastname.value;
//     const telephone = phone;
//     const email = form.email.value;
//     const password = form.password.value;
//     if (
//       firstname.trim() === "" ||
//       lastname.trim() === "" ||
//       telephone.trim() === "" ||
//       email.trim() === "" ||
//       password.trim() === ""
//     ) {
//       setErrorMessage("Please fill in all fields");
//       return;
//     }
//     try {
//       const resp = await fetch(`http://localhost:3001/register`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           firstname,
//           lastname,
//           telephone,
//           email,
//           password,
//         }),
//       });
//       if (resp.status === 201) {
//         setFormData({
//           firstname: "",
//           lastname: "",
//           telephone: "",
//           countryCode: "+49",
//           email: "",
//           password: "",
//         });
//         login(true);
//         setEmailError(false);
//         setPasswordError(false);
//         setErrorMessage("");
//         navigate("/main");
//        window.location.href = "/myAccount";
//         console.log(" Register done:", resp.data);
//       } else {
//         console.log("my error ::::::::::::::");
//         console.log("Error while signing up:", resp.data);
//         setErrorMessage("Incorrect email or password");
//         setEmailError(true);
//         setPasswordError(true);
//       }
//     } catch (error) {
//       console.log("Error while signing up:", error);
//     }
//   };
//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//     setFormData({
//       firstname: "",
//       lastname: "",
//       telephone: "",
//       countryCode: "+49",
//       email: "",
//       password: "",
//     });
//     setEmailError(false);
//     setPasswordError(false);
//     setErrorMessage("");
//   };
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     setEmailError(false);
//     setPasswordError(false);
//     setErrorMessage("");
//   };
//   return (
//     <div className='relative'>
//       {!isLoggedIn && !isOpen && (
//         <button
//           onClick={toggleDropdown}
//           className='bg-gray-200 text-gray-800 text-lg px-4 py-2 hover:shadow-md'
//         >
//           My Account
//         </button>
//       )}
//       {isOpen && (
//         <span className='fixed top-1 right-1 mt-2 w-482 h-720 z-10 flex-shrink-0 bg-white border border-gray-300 p-4'>
//           <svg
//             className='fixed right-5 top-5 cursor-pointer'
//             width='30'
//             height='30'
//             viewBox='0 0 40 40'
//             fill='none'
//             xmlns='http://www.w3.org/2000/svg'
//             onClick={closeForm}
//           >
//             <path
//               d='M30.4992 9.51665C30.1878 9.20457 29.7651 9.02918 29.3242 9.02918C28.8834 9.02918 28.4606 9.20457 28.1492 9.51665L19.9992 17.65L11.8492 9.49999C11.5378 9.1879 11.1151 9.01251 10.6742 9.01251C10.2334 9.01251 9.8106 9.1879 9.49922 9.49999C8.84922 10.15 8.84922 11.2 9.49922 11.85L17.6492 20L9.49922 28.15C8.84922 28.8 8.84922 29.85 9.49922 30.5C10.1492 31.15 11.1992 31.15 11.8492 30.5L19.9992 22.35L28.1492 30.5C28.7992 31.15 29.8492 31.15 30.4992 30.5C31.1492 29.85 31.1492 28.8 30.4992 28.15L22.3492 20L30.4992 11.85C31.1326 11.2167 31.1326 10.15 30.4992 9.51665Z'
//               fill='black'
//             />
//           </svg>
//           <div className='text-gray-800 font-inter font-normal text-2xl mb-2'>
//             Sign up
//           </div>
//           <hr
//             style={{
//               width: "434px",
//               height: "1px",
//               background: "#E8E8E8",
//               marginBottom: "13px",
//             }}
//           />
//           <form onSubmit={SignUpHandler}>
//             <label htmlFor='firstname'>First name</label>
//             <span className='block'>
//               <input
//                 className='mb-3 w-{434} border border-solid border-gray-300'
//                 type='text'
//                 name='firstname'
//                 value={formData.firstname}
//                 onChange={handleChange}
//               />
//             </span>
//             <label htmlFor='lastname'>Last name</label>
//             <span className='block'>
//               <input
//                 className='mb-3 w-49 h-483 border border-solid border-gray-300'
//                 type='text'
//                 name='lastname'
//                 value={formData.lastname}
//                 onChange={handleChange}
//               />
//             </span>
//             <label
//               htmlFor='countryCode'
//               className='block text-black font-Inter text-base font-normal'
//             >
//               Telephone number
//             </label>
//             <span>
//               <PhoneInput
//                 className='mb-3 w-434 h-483 flex-shrink-0 border border-solid border-gray-300  overflow-hidden bg-white'
//                 international
//                 defaultCountry='DE'
//                 value={phone}
//                 onChange={setPhone}
//               />
//             </span>
//             <label htmlFor='email'>Email</label>
//             <span className='block'>
//               <input
//                 className={`mb-3 w-434 h-483 border border-solid ${
//                   emailError ? "border-red-500" : "border-solid"
//                 } border-gray-300`}
//                 type='email'
//                 name='email'
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//             </span>
//             <label htmlFor='password'>Password</label>
//             <span className='block'>
//               <input
//                 className={`mb-3 w-434 h-483 border ${
//                   !passwordError ? "border-red-500" : "border-solid"
//                 } border-gray-300`}
//                 type='password'
//                 name='password'
//                 value={formData.password}
//                 onChange={handleChange}
//               />
//             </span>
//             {/* <label htmlFor='confirmPassword'>Confirm password</label>
//               <span className="block" >
//                 <input
//                 className='mb-3 w-434 h-483 border border-solid border-gray-300'
//                   type='password'
//                   name='confirmPassword'
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                 />
//               </span> */}
//             {errorMessage && (
//               <div className='text-red-500 text-sm mt-2'>{errorMessage}</div>
//             )}
//             <button
//               type='submit'
//               className={`flex-shrink-0 justify-center bg-black rounded-sm text-white px-20 py-5 ${
//                 errorMessage ? "cursor-not-allowed" : "cursor-pointer"
//               }`}
//               style={{
//                 width: "434px",
//                 height: "48px",
//                 fontSize: "14px",
//                 fontStyle: "normal",
//                 fontWeight: 300,
//                 lineHeight: "normal",
//                 opacity: errorMessage ? 0.7 : 1,
//               }}
//               disabled={errorMessage ? true : false}
//             >
//               SIGN UP
//             </button>
//           </form>
//         </span>
//       )}
//       {isLoggedIn && <Logout />}
//     </div>
//   );
// };
// export default SignUp;

import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [phone, setPhone] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    telephone: "",
    countryCode: "+49",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const SignUpHandler = async (e) => {
    e.preventDefault();
    const form = e.target;
    const firstname = form.firstname.value;
    const lastname = form.lastname.value;
    const telephone = phone;
    const email = form.email.value;
    const password = form.password.value;

   
    if (
      firstname.trim() === "" ||
      lastname.trim() === "" ||
      telephone.trim() === "" ||
      email.trim() === "" ||
      password.trim() === ""
    ) {
   
      return;
    }

    try {
      const resp = await fetch(`http://localhost:3001/register`, {
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
        }),
      });

      if (resp.status === 201) {
        setFormData({
          firstname: "",
          lastname: "",
          telephone: "",
          countryCode: "+49",
          email: "",
          password: "",
        });
       
        navigate("/main");
      } else {
 
        console.log("Error while signing up:", resp.data);
      }
    } catch (error) {
      console.log("Error while signing up:", error);
    }
  };
  const closeForm = () => {
        setIsOpen(false);
       };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className='relative'>
      {/* {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className='bg-gray-200 text-gray-800 text-lg px-4 py-2 hover:shadow-md'
        >
          My Account
        </button>
      )} */}
      {/* {isOpen && ( */}
        <div className='fixed top-1 right-1 mt-2 w-482 h-720 z-10 flex-shrink-0 bg-white border border-gray-300 p-4'>
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
          <div className='text-gray-800 font-inter font-normal text-2xl mb-2'>
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
          <form onSubmit={SignUpHandler}>
            <label htmlFor='firstname'>First name</label>
            <span className='block'>
              <input
                className='mb-3 w-434 border border-solid border-gray-300'
                type='text'
                name='firstname'
                value={formData.firstname}
                onChange={handleChange}
              />
            </span>
            <label htmlFor='lastname'>Last name</label>
            <span className='block'>
              <input
                className='mb-3 w-434 border border-solid border-gray-300'
                type='text'
                name='lastname'
                value={formData.lastname}
                onChange={handleChange}
              />
            </span>
            <label
              htmlFor='countryCode'
              className='block text-black font-Inter text-base font-normal'
            >
              Telephone number
            </label>
            <span>
              <PhoneInput
                className='mb-3 w-434 flex-shrink-0 border border-solid border-gray-300  overflow-hidden bg-white'
                international
                defaultCountry='DE'
                value={phone}
                onChange={setPhone}
              />
            </span>
            <label htmlFor='email'>Email</label>
            <span className='block'>
              <input
                className={`mb-3 w-434 border border-solid ${
                  formData.emailError ? "border-red-500" : "border-solid"
                } border-gray-300`}
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
              />
            </span>
            <label htmlFor='password'>Password</label>
            <span className='block'>
              <input
                className={`mb-3 w-434 border ${
                  formData.passwordError ? "border-red-500" : "border-solid"
                } border-gray-300`}
                type='password'
                name='password'
                value={formData.password}
                onChange={handleChange}
              />
            </span>
            {formData.errorMessage && (
              <div className='text-red-500 text-sm mt-2'>
                {formData.errorMessage}
              </div>
            )}
            <button
              type='submit'
              className={`flex-shrink-0 justify-center bg-black rounded-sm text-white px-20 py-5 ${
                formData.errorMessage ? "cursor-not-allowed" : "cursor-pointer"
              }`}
              style={{
                width: "434px",
                height: "48px",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 300,
                lineHeight: "normal",
                opacity: formData.errorMessage ? 0.7 : 1,
              }}
              disabled={formData.errorMessage ? true : false}    >
              SIGN UP
            </button>
          </form>
        </div>
      {/* )} */}

    </div>
  );
};

export default SignUp;