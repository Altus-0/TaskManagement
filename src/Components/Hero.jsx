import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Button from '../Components/Button'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (


    <div className="min-h-screen overflow-hidden bg-gray-900 px-6 pt-40 pb-4 text-center shadow-2xl ">
      <h2 className="mx-auto max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-4xl">
        Streamline Your Success: Master Task Management with ClarityFlow
      </h2>
      <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
        Manage your tasks effectively. Our Open Source tool is designed to simplify your workflow and enhance productivity for individuals and teams alike
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link to={'/Signup'}

          className="rounded-md bg-white px-8 py-4 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Get started
        </Link>
        <Link to={'https://github.com/Altus-0/TaskManagement'} className="text-sm font-semibold leading-6 text-white">
          Github <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  )
}
