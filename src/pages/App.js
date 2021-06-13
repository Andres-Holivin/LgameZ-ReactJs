import React from 'react';
import Routers from './Routers';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';

import user from '../assets/user.jpg'
import img from '../assets/sky-5375005_1920.jpg'

import './App.css';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import * as Icon from '@heroicons/react/solid'
import ProfileNav from './components/ProfileNav';
import AuthService from '../configs/AuthService';

library.add(fab, far, fas);

const GuestMenu=()=>{
  let nav=[];
  nav.push(<ProfileNav title="Login" href="/login"/>);
  nav.push(<ProfileNav title="Register" href="/Register"/>);
  return nav;
}
const MemberMenu=()=>{
  let nav=[];
  nav.push(<ProfileNav title="LogOut" href=""/>);
  return nav;
}
const App =()=>{
  const currentUser=AuthService.getCurrentUser();
  return(
    <>
      <div className="w-full min-h-screen bg-gray-100">
        <div className="bg-gray-200">
          <div className="flex justify-between px-12 py-3 font-serif shadow-xl">
            <a className="flex items-center hover:no-underline hover:text-gray-400"href="/"><div className="text-3xl font-bold ">LGameZ</div></a>
            <div className="flex items-center text-lg space-x-9">
              <a className="hover:text-gray-400" href="/">Home</a>
              <a className="hover:text-gray-400" href="/Catagoty">Catagory</a>
              <a className="hover:text-gray-400" href="/Forum">Forum</a> 
              <a className="hover:text-gray-400" href="/News">News</a>        
            </div>
            <div className="z-10 flex items-center space-x-2">        
               <Menu as="div" className="relative inline-block text-left">
                {({ open }) => (
                  <>
                    <div>
                      <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                        <div className="flex items-center space-x-2">
                          <div>{currentUser!=null?currentUser.name:"user"}</div>
                          <img src={user} alt="user" width="30px" className="rounded-3xl"></img> 
                        </div>
                      </Menu.Button>
                    </div>
                    <Transition
                      show={open}
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items
                        static
                        className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      >
                        <div className="py-1">
                          {currentUser!=null?MemberMenu():GuestMenu()}                          
                        </div>              
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>
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
