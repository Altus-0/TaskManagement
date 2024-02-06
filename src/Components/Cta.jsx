import { Link } from 'react-router-dom'

export default function Cta() {
  return (
    <div className="bg-white ">
      <div className="px-6 py-20 py-22 sm:py-20 sm:px-6 sm:pb-30 lg:px-8 ">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Boost your productivity.
            Start using our app today.
            <br />

          </h2>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link to={'/Signup'}
              href="#"
              className="rounded-md bg-indigo-600 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
