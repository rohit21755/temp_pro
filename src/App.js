
import './App.css';

import {FcGoogle} from 'react-icons/fc';
import {FaFacebookF} from 'react-icons/fa';
import {IoLogoApple} from 'react-icons/io';
function App() {
  return (
    <>
      <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <h1 className='text-bold text-2xl'>Let's get started</h1>
      </div>
      <div className="md:w-1/3 max-w-sm">
    
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" type="text" placeholder="Email Address" />
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="password" placeholder="Password" />
        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span>Remember Me</span>
          </label>
          <a className="text-black hover:text-blue-700 hover:underline hover:underline-offset-4" href="/">Forgot Password?</a>
        </div>
        <div className="text-center md:text-left">
          <button className=" w-full mt-4 bg-green-600 hover:bg-blue-700 px-5 py-4 text-white uppercase rounded text-xs " type="submit">Login</button>
        </div>
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">Or</p>
        </div>
<div className='flex justify-center'>
<div className='flex space-x-4 '>
          <div className="justify-center border-[2px] p-3"><FcGoogle/></div>
          <div className="justify-center border-[2px] p-3"><FaFacebookF/></div>
          <div className='justify-center border-[2px] p-3'><IoLogoApple/></div>
        </div>
</div>
       
        
        
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left mt-4">
          Don't have an account? <a className="text-green-600 hover:underline hover:underline-offset-4" href="/">Register</a>
        </div>
      </div>
    </section>
    </>
  );
}

export default App;
