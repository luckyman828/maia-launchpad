import { useState } from "react";
import Link from "next/link";
import Image from 'next/image'

export default function Card(props) {
    
    return (
        <div className="w-full flex flex-col justify-center items-center mx-3 border-2 p-4 shadow-lg rounded-md">
            <div className="w-32 mx-auto">
                <Image className="" src={props.img_url} alt="Cover image"/>
            </div>
            
            <div className="text-base font-normal text-gray-500 mt-5 mb-2">
                {props.name}
            </div>
    
            {
                props.stuff ? (
                    <div className="text-xs font-normal text-gray-500 mt-2 mb-2">
                        {props.stuff}
                    </div>
                ) : ("")
            }

            <div className="text-xs font-normal text-gray-400 mb-2">
                {
                    props.keyInvestor ? (
                        <Link href={props.link}><a className="text-blue-400" href="">{props.name}   </a></Link>
                    ) : ("")
                }
                {props.service}
            </div>
            
            {
                props.contactInfo ? (
                    <div className="flex justify-center ">
                        <Link href={props.contactInfo.twitter}>
                            <a href="#" className="mx-5 opacity-75 hover:bg-gray-300 rounded-full p-2.5 flex justify-center"><Image className="h-4" src="../assets/img/linkedin.svg" alt="Workflow"/></a>
                        </Link>
                        <Link href={props.contactInfo.linkedin}>
                            <a href="#" className="mx-5 opacity-75 hover:bg-gray-300 rounded-full p-2.5 flex justify-center"><Image className="h-4" src="../assets/img/twitter.svg" alt="Workflow"/></a>
                        </Link>
                    </div>
                ) : ("")
            }

            {
                props.link ? (
                    props.keyInvestor ? ("") : (
                        <div className="flex justify-center ">
                            <Link href={props.link}>
                                <a href="#" className="mx-5 opacity-75 hover:bg-gray-300 rounded-full p-2.5 flex justify-center">Learn More</a>
                            </Link>
                        </div>
                    )
                ) : ("")
            }
            
        </div>
    );
}