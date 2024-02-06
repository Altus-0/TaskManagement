import Logo from '../../images/Task.png'
import { Link } from 'react-router-dom'


export default function Login() {
    return (
        <div className=''>

            <div className='flex flex-col flex-1 min-h-full justify-center'>

                <div className="mt-20 sm:mx-auto sm:w-full sm:max-w-sm">
                <a href='/'><img src={Logo} className='mx-auto h-20 w-20 mb-2'></img></a>
                <h1 className='flex justify-center text-2xl'>Login to your account</h1>
                    <form className='mt-10'>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className='mt-5'>
              <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full mb-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                </div>
                <div className='flex justify-between'>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <a href='/Signup' className='block text-sm font-medium leading-6 text-indigo-600' >Forgot Password?</a>
              </div>
              <div className='mt-5'>
              <input
                  id="Password"
                  name="Password"
                  type="Password"
                  autoComplete="Password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
       
                <button className='flex justify-center w-full text-white bg-black rounded-md p-2 mt-7'>Sign In</button>
                
                </div>
                    </form>

                    <p className='text-center mt-10'>Don't have an account? {' '}<Link to={'/Signup'} className='text-indigo-600 font-semibold'>Sign up now</Link></p>
                   


                </div>
            </div>
        </div>


    )
}
