import Link from "next/link";
import ReactTypingEffect from 'react-typing-effect';
import Image from 'next/image'


export default function Home() {
  return (
    <div className="mt-24">
      <div className="flex flex-col justify-center">
        <div className="2xl:flex 2xl:justify-center xl:flex xl:justify-center text-center">
          <h2 className="text-4xl text-gray-600">Technology Is The Fundamental Driver For </h2>&nbsp;
          
          <ReactTypingEffect className="text-4xl text-gray-600"
            text={[" Growth", " Progress"]}
          />

          {/* <div className="text-4xl text-gray-600 mx-2" data-testid="typewriter-wrapper">
            <span className="Typewriter__wrapper"> Evolution</span><span className="Typewriter__cursor">|</span>
          </div> */}
        </div>
        <div className="flex text-xl text-gray-400 justify-center mt-10"><p>We back determined teams, solving hard problems, with global impact.<br/>
          Raise funds, build a community, deliver a technology that improves the world.</p>
        </div>
        <div className="mt-24" style={{ position: "relative" }} >
          <div className="flex flex-col justify-center absolute-center-top">
            <div className="flex space-x-4 ml-2">
             <Image className="w-44 " src="./assets/img/logo-white.png" alt="Cover image"  />
            </div>
          </div>
          <div className="shadow-lg">
            <Image className="w-full border-8 border-gray-200 shadow-2xl" src="./assets/img/cover.jpg" alt="Cover image"  />
          </div>
          <div className="flex flex-col absolute-center-bottom" >
            <h1 className="flex justify-center text text-white lg:text-4xl mb-5">Enter holoride</h1>
            <div className="flex space-x-4 ml-3">
              <Link href="/holoride">
                <a href="#" className="bg-gray-100 text-gray-100 bg-blue-700 lg:h-12 px-3 py-2 rounded-md text-sm flex items-center w-52 flex justify-center" aria-current="page">
                    View Project
                </a>
              </Link>
            </div>
          </div>
        </div>
        
        
      </div>
    </div>
  )
}
