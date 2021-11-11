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
            <div className="container mx-auto px-4 flex justify-between">
                <div class="grid grid-rows-3 grid-flow-col gap-4">
                    <div class="row-span-3 ...">1</div>
                    <div class="col-span-2 ...">2</div>
                    <div class="row-span-2 col-span-2 ...">3</div>
                </div>
            </div>
        </div>
    );
}