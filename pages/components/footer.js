export default function Footer() {
    return (
        // <div className="border-t-2 border-gray-200 mt-24">
        //     <div className="container mx-auto px-4 flex justify-between">
        //         <div className="flex flex-col">
        //             <div className="flex-shrink-0 flex items-center">
        //                 <img class="block lg:hidden h-8 w-auto" src="../assets/img/logo.svg" alt="Workflow"/>
        //                 <img class="hidden lg:block h-8 w-auto" src="../assets/img/logo-lg.svg" alt="Workflow"/>
        //                 <a href="#" className="mx-5">Launchpad</a>
        //             </div>
        //             <div>
        //             The strategic launchpad for projects with a high chance of making a lasting impact on the world using Elrond, the internet-scale blockchain technology.
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="border-t-2 border-gray-200 mt-24">
            <div className="container mx-auto lg:px-20 md:px-12 sm:px-4 mt-12 mb-12">
                <div className="grid grid-cols-6 gap-4">
                    <div className="col-start-1 col-end-3 max-w-xs">
                        <div className="flex-shrink-0 flex items-center">
                            <img class="opacity-75 block lg:hidden h-8 w-auto" src="../assets/img/logo.svg" alt="Workflow"/>
                            <img class="opacity-75 hidden lg:block h-8 w-auto" src="../assets/img/logo-lg.svg" alt="Workflow"/>
                            <a href="#" className="text-gray-400 mx-5">Launchpad</a>
                        </div>
                        <div className="text-sm text-gray-400 mt-5">
                            The strategic launchpad for projects with a high chance of making a lasting impact on the world using Elrond, the internet-scale blockchain technology.
                        </div>
                        <div className="flex-shrink-0 flex items-center mt-5">
                            <a href="#" className="mx-5 opacity-75"><img class="block h-4 w-auto text-gray-400" src="../assets/img/twitter.svg" alt="Workflow"/></a>
                            <a href="#" className="mx-5 opacity-75"><img class="block h-4 w-auto" src="../assets/img/telegram.svg" alt="Workflow"/></a>
                            <a href="#" className="mx-5 opacity-75"><img class="block h-4 w-auto" src="../assets/img/facebook.svg" alt="Workflow"/></a>
                            <a href="#" className="mx-5 opacity-75"><img class="block h-4  w-auto" src="../assets/img/instergram.svg" alt="Workflow"/></a>
                        </div>
                        <div className="text-xs text-gray-400 mt-5">
                        © 2021 Maiar Launchpad. All rights reserved.
                        </div>
                    </div>
                    <div className="col-start-4 col-end-5">
                        <div>
                            Launchpad
                        </div>
                        <div>
                            Launchpad
                        </div>
                        <div>
                            Launchpad
                        </div>
                    </div>
                    <div >
                        <div>
                            Launchpad
                        </div>
                        <div>
                            Launchpad
                        </div>
                        <div>
                            Launchpad
                        </div>
                    </div>
                    <div >
                        <div>
                            Launchpad
                        </div>
                        <div>
                            Launchpad
                        </div>
                        <div>
                            Launchpad
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}