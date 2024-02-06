import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import Button from './Button.jsx'
import Logo from '../../images/Task.png'


const navigation = [
  { name: 'Sign Up', href: '/Signup' },
  { name: 'GitHub', href: 'https://github.com/Altus-0/TaskManagement' },

]

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b-4 ">
      <nav className="mx-auto flex max-w-6xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex flex-1">
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-m font-semibold leading-7 text-black">
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
        <Link to={'/'} className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <img className="h-16 w-auto" src={Logo} alt="logo" />

        </Link>
        <div className="flex flex-1 justify-end">
          <Link to={'/login'}>       <Button text={'Login'} /></Link>


        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-white px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex flex-1">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-black"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <Link to={'/'} className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>

            </Link>
            <div className="flex flex-1 justify-end">
              <Link to={'/login'} className="text-sm font-semibold leading-6 text-black">
                Log in <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="mt-6 space-y-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black hover:bg-gray-50"
              >
                {item.name}
              </a>
            ))}

          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
