import React from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
const Login = () => {
  return (

    <>

    <Navbar/>
    <form className="flex flex-col items-center justify-center gap-4 p-12 bg-white shadow-lg rounded-lg mt-12">
       <div className="w-20 h-20 bg-gradient-to-b from-transparent to-gray-100 border border-gray-200 shadow-sm rounded-lg flex items-center justify-center">
            <span className="text-5xl">🔑</span>
       </div>

      <div className="flex flex-col items-center justify-center gap-2">
        <p className="m-0 text-xl font-bold text-gray-800">Login to your Account</p>
        <span className="text-sm max-w-xs text-center leading-4 text-gray-500">
          Get started with our app, just create an account and enjoy the experience.
        </span>
      </div>

      <div className="w-full flex flex-col gap-2">
        <label className="text-xs text-gray-500 font-semibold" htmlFor="email_field">Email</label>
        <div className="relative">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            height="24"
            width="24"
            className="absolute z-10 left-3 bottom-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              stroke="#141B34"
              d="M7 8.5L9.94202 10.2394C11.6572 11.2535 12.3428 11.2535 14.058 10.2394L17 8.5"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              stroke="#141B34"
              d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z"
            />
          </svg>
          <input
            placeholder="name@mail.com"
            title="Input title"
            name="input-name"
            type="email"
            className="w-full h-10 pl-10 rounded-md border border-gray-300 shadow-sm transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="email_field"
            required
          />
        </div>
      </div>

      <div className="w-full flex flex-col gap-2">
        <label className="text-xs text-gray-500 font-semibold" htmlFor="password_field">Password</label>
        <div className="relative">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            height="24"
            width="24"
            className="absolute z-10 left-3 bottom-2"
          >
            <path
              strokeLinecap="round"
              strokeWidth="1.5"
              stroke="#141B34"
              d="M18 11.0041C17.4166 9.91704 16.273 9.15775 14.9519 9.0993C13.477 9.03404 11.9788 9 10.329 9C8.67911 9 7.18091 9.03404 5.70604 9.0993C3.95328 9.17685 2.51295 10.4881 2.27882 12.1618C2.12602 13.2541 2 14.3734 2 15.5134C2 16.6534 2.12602 17.7727 2.27882 18.865C2.51295 20.5387 3.95328 21.8499 5.70604 21.9275C6.42013 21.9591 7.26041 21.9834 8 22"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              stroke="#141B34"
              d="M6 9V6.5C6 4.01472 8.01472 2 10.5 2C12.9853 2 15 4.01472 15 6.5V9"
            />
          </svg>
          <input
            placeholder="Password"
            title="Input title"
            name="input-password"
            type="password"
            className="w-full h-10 pl-10 rounded-md border border-gray-300 shadow-sm transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="password_field"
            required
          />
        </div>
      </div>

      <button type="submit" className="w-full h-10 bg-blue-600 rounded-md text-white font-semibold cursor-pointer hover:bg-blue-700">
        Sign In
      </button>


       <a
            href="/" // Replace with your actual route
            className="w-full h-10 border border-gray-300 rounded-md text-gray-600 font-semibold hover:bg-gray-100 flex items-center justify-center"
            >
            Forgot Password?
      </a>

      <span className="text-xs text-gray-500">
        Don’t have an account? <a href="/" className="text-blue-600 font-semibold">Sign Up</a>
      </span>
    </form>

    <Footer/>

    </>
  );
};

export default Login;
