import Link from "next/link"
import { useWalletModal, useWeb3, wallets } from "@react-dapp/wallet";
import { useWeb3React} from '@web3-react/core'
import Image from 'next/image'

export default function Header() {
    const { setOpen, deactivate, error: walletError } = useWalletModal();
    const { account, connector } = useWeb3React()

    return (
        
        <nav className="bg-gray-100 border-b-2 border-gray-200 h-20 flex items-center main-nav">
            <div className="container mx-auto p-4 flex justify-between">
                <div className="flex-shrink-0 flex items-center">
                    <Image className="block lg:hidden h-10 w-auto" src="../assets/img/logo.svg" alt="Workflow"/>
                    <Image className="hidden lg:block h-10 w-auto" src="../assets/img/logo-lg.svg" alt="Workflow"/>   
                    <Link href="/">
                        <a href="#" className="mx-5">Launchpad</a>
                    </Link>
                </div>
                <div className="flex"> 
                    <div className="flex space-x-4">
                        <Link href="https://maiarlaunchpad.typeform.com/to/TzeoE5SU">
                            <a className="bg-gray-100 border-2 text-blue-800 h-9 px-3 py-2 rounded-md text-xs flex items-center justify-between hover:border-gray-400" aria-current="page">
                                <Image className="block h-8 w-3 mr-3" src="../assets/img/startups.svg" alt="logo"/>
                                Startups Apply
                            </a>
                        </Link>
                    </div>
                    <div className="flex space-x-4 ml-2">
                        <a onClick={() => account ? deactivate() : setOpen(true)} href="#" className="bg-gray-100 border-2 text-gray-100 bg-blue-700 h-9 px-3 py-2 rounded-md text-xs flex items-center justify-between" aria-current="page">
                            <Image className="opacity-75 block h-8 w-3 mr-3" src="../assets/img/connect.svg" alt="logo"/>
                            {account ? "Disconnect" : 'Connect'}
                        </a>
                        { 
                        account ? (
                            <div className="bg-gray-100 border-2 text-gray-100 bg-blue-700 h-9 px-3 py-2 rounded-md text-xs flex items-center justify-between" aria-current="page">
                                {account.substring(0, 5) + "..." }
                            </div>
                            ) : ("")
                        
                        }
                    </div>
                </div>
            </div>
        </nav>
        
    )
}