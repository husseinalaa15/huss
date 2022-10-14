import React from 'react'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'



const navigation = [
  { name: 'Home', href: '#Home' },
  { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },

    // { name: 'Marketplace', href: '#' },
    // { name: 'Company', href: '#' },
  ]
const Navbar = () => {
  return (
    <Popover>
    <div className="w-full z-10 fixed pt-6 pb-6 px-4 sm:px-6 lg:px-8">
      <nav className="  flex items-center justify-between sm:h-10 lg:justify-between" aria-label="Global">
        <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
          <div className="flex items-center justify-between w-full md:w-auto">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <img
                alt="Workflow"
                className="h-12 w-12 bg-primary rounded-3xl p-2 border-2 border-text-secondary"
                src="../images/hussein.png"
              />
            </a>
            <div className="-mr-2 flex items-center md:hidden">
              <Popover.Button className="bg-primary rounded-md p-2 inline-flex items-center justify-center border-2 border-text-secondary text-text-secondary hover:text-text-secondary hover:bg-text-secondary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
        </div>
        <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
              {item.name}
            </a>
          ))}
          <a  href="../Hussein's Resume.pdf" download className="font-medium text-indigo-600 hover:text-indigo-500 bg-text-secondary py-2  px-3 rounded-lg text-text-primary border-2 transition-all border-text-secondary hover:bg-transparent">
            Download Cv
          </a>
        </div>
      </nav>
    </div>

    <Transition
      as={Fragment}
      enter="duration-150 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Popover.Panel
        focus
        className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
      >
        <div className="rounded-lg shadow-md bg-primary ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="px-5 pt-4 flex items-center justify-between">
            <div>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                alt=""
              />
            </div>
            <div className="-mr-2">
              <Popover.Button className="bg-primary rounded-md p-2 inline-flex items-center justify-center text-text-secondary hover:bg-text-secondary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Close main menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                {item.name}
              </a>
            ))}
          </div>
          <a
            href="../Hussein's Resume.pdf" download
            className="block w-full px-5 py-3 text-center font-medium text-indigo-600  bg-text-secondary py-2  px-3 rounded-lg text-text-primary border-2 transition-all border-text-secondary hover:bg-transparent"
          >
            Download Cv
          </a>
        </div>
      </Popover.Panel>
    </Transition>
  </Popover>
  )
}

export default Navbar