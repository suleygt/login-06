import React  from 'react';
import logo from './logo.svg';
import './App.css';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

function App() {
  return (
    <div className="quterform">
      <div className="triangle"></div> 
      <div className="triangle-right"></div> 
      <div className="wave-top-right"></div>
      <div className="wave-bottom-left"></div>
      <div className="innerform">
     
       

        <div className="bg-gray-500 p-6 rounded-lg shadow-inner">
          <h2 className="text-xl light-gray mb-4 text-center">LOGIN</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700"></label>
              <input type="text" id="username"
              placeholder='username'
               className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700"></label>
              <input type="password" id="password" placeholder='password' className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
            </div>
            <div className="mb-8">
              <button type="submit" className="button">Login</button>
            </div>
            <div className="span">
            <div className="border-t border-gray-300 flex-grow"></div>
            <span className="mx-4 text-gray-500">OR</span>
            <div className="border-t border-gray-300 flex-grow"></div>
       

</div>

            <div className="flex justify-center space-x-4">
              <button type="button" className="flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none">
              <FaGoogle className="google-icon w-6 h-6 mr-2" />
               
              </button>
              <button
                type="button"
                className="flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
              >
                <FaFacebook className="facebook-icon w-6 h-6 mr-2" />
               
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


export default App;
