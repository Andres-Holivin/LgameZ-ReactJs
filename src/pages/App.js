import React from 'react';
import Routers from './Routers';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
import './App.css';

library.add(fab, far, fas);
const App =()=>{
  return(
    <>
      <div className="w-full min-h-screen bg-gray-100">
        <div className="bg-gray-200">
          <div className="flex justify-between px-12 py-3 font-serif shadow-xl">
            <a href="/"><h1 className="text-3xl font-bold">LGameZ</h1></a>
            <div className="flex items-center text-lg space-x-9">
              <a className="hover:text-gray-400" href="/">Home</a>
              <a className="hover:text-gray-400" href="/catagory">Catagory</a>
              <a className="hover:text-gray-400" href="/forum">Forum</a> 
              <a className="hover:text-gray-400" href="/cart">Cart</a>
              <a className="hover:text-gray-400" href="/news">News</a>        
            </div>
            <div className="flex items-center">
              <div>Name</div>
              <img></img>
            </div>
          </div>
        </div>
        <div className="w-full h-full">
          <Routers/>
        </div>
      </div>    
    </>
  )
}
export default App;
