import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [isAuthTrue, setIsAuthTrue] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    axios
      .post('/signup', {
        firstName,
        lastName,
        email,
        password,
      })
      .then((data) => {
        console.log(data);
        if (data.data.message === 'your are successfully registered') {
          navigate('/');
          setFirstName('');
          setLastName('');
          setEmail('');
          setPassword('');
        } else if (data.data.message === 'Email already exists') {
          setIsAuthTrue(true);
        }
      });
  };

  return (
    <section className='flex flex-col justify-center items-center'>
      {/* <Link to='/'>
        <p className='font-bold text-2xl text-textGreen mb-4'>
          Finance Tracker
        </p>
      </Link> */}

      <form
        className=''
        onSubmit={handleSubmit}
      >
        <div key='firstName' className='relative'>
          <label htmlFor='firstName'>FirstName</label>
          <input
            className='block w-full text-textDark rounded-md border-2 border-borderPrimary p-2 mb-3'
            type='text'
            required
            id='firstName'
            name='firstName'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div key='lastName' className='relative'>
          <label htmlFor='lastName'>LastName</label>
          <input
            className='block w-full text-textDark rounded-md border-2 border-borderPrimary p-2 mb-3'
            type='text'
            required
            id='lastName'
            name='lastName'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div key='email' className='relative'>
          <label htmlFor='email'>Email</label>
          <input
            className='block w-full text-textDark rounded-md border-2 border-borderPrimary p-2 mb-3'
            type='email'
            required
            id='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div key='password' className='relative'>
          <label htmlFor='password'>Password</label>
          <input
            className='block w-full text-textDark rounded-md border-2 border-borderPrimary p-2 mb-3'
            type={showPassword ? 'text' : 'password'}
            required
            id='password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {showPassword ? (
            <i
              className='fa-solid fa-eye-slash absolute right-3 top-[38px] cursor-pointer text-textDark'
              onClick={() => setShowPassword(!showPassword)}
            ></i>
          ) : (
            <i
              className='fa-solid fa-eye absolute right-3 top-[38px] cursor-pointer text-textDark'
              onClick={() => setShowPassword(!showPassword)}
            ></i>
          )}
        </div>

        {isAuthTrue && (
          <p className='text-[#ff5a5a] mb-3'>Email already exists !</p>
        )}

        <button
          className='bg-[#e9a4504c] font-bold hover:bg-darkGreen transition-colors delay-75 duration-500 text-textWhite block w-full rounded-md p-2 mb-3'
          type='submit'
        >
          Register
        </button>

        {/* <p className='mt-2'>
          Already have an account ?
          <Link
            to='/login'
            className='text-textGreen hover:text-darkGreen ml-2'
          >
            Log In
          </Link>
        </p> */}
      </form>
    </section>
  );
};

export default SignUp;
