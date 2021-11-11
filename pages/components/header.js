
export default function Header() {
    return (
        
        <nav className="bg-gray-100 border-b-2 border-gray-200 h-20 flex items-center">
            <div className="container mx-auto lg:px-20 md:px-12 sm:px-4 flex justify-between">
                <div className="flex-shrink-0 flex items-center">
                    <img className="block lg:hidden h-10 w-auto" src="../assets/img/logo.svg" alt="Workflow"/>
                    <img className="hidden lg:block h-10 w-auto" src="../assets/img/logo-lg.svg" alt="Workflow"/>   
                    <a href="#" className="mx-5">Launchpad</a>
                </div>
                <div className="flex"> 
                    <div className="flex space-x-4">
                        <a href="#" className="bg-gray-100 border-2 text-blue-800 h-9 px-3 py-2 rounded-md text-xs flex items-center justify-between hover:border-gray-400" aria-current="page">
                            <img className="block h-8 w-3 mr-3" src="../assets/img/startups.svg" alt="logo"/>
                            Startups Apply
                        </a>
                    </div>
                    <div className="flex space-x-4 ml-2">
                        <a href="#" className="bg-gray-100 border-2 text-gray-100 bg-blue-700 h-9 px-3 py-2 rounded-md text-xs flex items-center justify-between" aria-current="page">
                            <img className="opacity-75 block h-8 w-3 mr-3" src="../assets/img/connect.svg" alt="logo"/>
                            Connect
                        </a>
                    </div>
                </div>
            </div>
        </nav>
        
    )
}