import { useState } from "react";
import Link from "next/link";

export default function Card(props) {
    
    return (
        <div className="w-full flex flex-col justify-center items-center mx-3 border-2 rounded">
            <div>
            <img className="" src={props.img_url} alt="Cover image"/>
            </div>
            <div className="text-base font-normal text-gray-500 mt-5 mb-2">
                {props.name}
            </div>

            <div className="text-xs font-normal text-gray-500 mb-2">
                {props.stuff}
            </div>

            <div className="text-xs font-normal text-gray-400 mb-2">
                {props.service}
            </div>

            <div className="flex justify-center ">
                <Link href={props.contactInfo.twitter}>
                    <a href="#" className="mx-5 opacity-75 hover:bg-gray-300 rounded-full p-2.5 flex justify-center"><img className="h-4" src="../assets/img/linkedin.svg" alt="Workflow"/></a>
                </Link>
                <Link href={props.contactInfo.linkedin}>
                    <a href="#" className="mx-5 opacity-75 hover:bg-gray-300 rounded-full p-2.5 flex justify-center"><img className="h-4" src="../assets/img/twitter.svg" alt="Workflow"/></a>
                </Link>
            </div>
        </div>
    );
}