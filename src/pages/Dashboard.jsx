const Tasks = [
    { taskName: 'Lindsay Walton', taskDesc: 'Front-end Developer', dueDate: 'lindsay.walton@example.com'},

  ]

const handleLogout = () => {
  window.location.href = '/';
}


export default function Dashboard() {
    return (
        <div>
        <div className="bg-white w-full h-20">
            
            <div className="flex justify-end align-center h-full mr-20">
            
            <button onClick={handleLogout}>Log Out</button>
            </div>
        </div>
     
        <div className="flex justify-center items-center h-screen bg-gray-900">
      
        <div className="bg-gray-900">
            
      <div className="mx-auto max-w-7xl">
        <div className="bg-gray-900 py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
              <div className="sm:flex-auto">
                <h1 className="text-base font-semibold leading-6 text-white">Tasks</h1>
                <p className="mt-2 text-sm text-gray-300">
                  Create, Edit and Delete Tasks
                </p>
              </div>
              <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                <button
                  type="button"
                  className="block rounded-md bg-indigo-500 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Add Task
                </button>
              </div>
            </div>
            <div className="mt-8 flow-root">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <table className="min-w-full divide-y divide-gray-700">
                    <thead>
                      <tr>
                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0">
                          Task Name
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                          Task Description
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                          Task Due Date
                        </th>
                     
                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      {Tasks.map((Tasks) => (
                        <tr key={Tasks.taskName}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">
                            {Tasks.taskDesc}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{Tasks.taskName}</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{Tasks.taskDesc}</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{Tasks.dueDate}</td>
                          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                            <a href="#" className="text-indigo-400 hover:text-indigo-300">
                              Edit<span className="sr-only">, {Tasks.taskName}</span>
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
          
    
        </div>
        </div>
    )
}