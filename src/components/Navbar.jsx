import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { RiHome2Fill } from "react-icons/ri";

const navigation = [
    { name: 'Education', to: '/resume/education' },
    { name: 'Experience', to: '/resume/experience' },
    { name: 'Skills', to: '/resume/skills' },
    { name: 'Projects', to: '/resume/projects' },
    { name: 'Activities', to: '/resume/activities' },
]

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="absolute sticky top-0 z-50 bg-gradient-to-r from-slate-900 to-slate-700">
                <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <Link to="/resume" className="-m-1.5 p-5 scroll-smooth">
                            {/* <span className="sr-only">Your Company</span> */}
                            <RiHome2Fill className='bg-slate-50 rounded hover:bg-orange-500'/>
                        </Link>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            {/* <span className="sr-only">Open main menu</span> */}
                            <Bars3Icon className="h-6 w-6 bg-slate-50 hover:bg-orange-500 rounded" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12 scroll-smooth">
                        {navigation.map((item) => (
                            <Link key={item.name} to={item.to} className="text-sm font-semibold leading-6 text-slate-50 hover:text-orange-600 hover:text-lg">
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                            Log in <span aria-hidden="true">&rarr;</span>
                        </a> */}
                    </div>
                </nav>
                <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-50" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <Link to="/" className="-m-1.5 p-1.5">
                                {/* <span className="sr-only">Your Company</span> */}
                                {/* <img
                                    className="h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                    alt=""
                                /> */}
                            </Link>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            to={item.to}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover: font-bold"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
  )
}

export default Navbar