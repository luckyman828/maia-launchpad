import Link from 'next/link'
import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Holoride() {
  

  return (
    
    <div className="flex flex-col-reverse  sm:flex sm:flex-col-reverse md:flex md:flex-col-reverse lg:block mt-10">

      <div className="lg:w-8/12 md:w-full inline-block	mx-3 bg-gray-50 border-r-2 border-l-2 border-b-2 rounded-md shadow-2xl">
        <div className="container mx-auto px-10 border-b-2">
          
          <div className="flex justify-center mt-5 mb-5">
            <img className="w-30 " src="./assets/img/holoride.png" alt="Cover image"  />
          </div>
          <div className="flex justify-center mt-5 mb-5 text-center text-gray-600 text-holoride">
            Audi-backed holoride To Transform Every Car Ride Into The Ultimate<br/> Entertainment Experience Via Extended Reality And NFTs On The <br/>Elrond Blockchain
          </div>
          <div className="flex justify-center mt-5 mb-20">
            <a href="#" className="mx-5 opacity-75 hover:bg-gray-300 rounded-full p-2.5 flex justify-center"><img className="block h-4 w-auto" src="../assets/img/twitter.svg" alt="Workflow"/></a>
            <a href="#" className="mx-5 opacity-75 hover:bg-gray-300 rounded-full p-2.5 flex justify-center"><img className="block h-4 w-auto" src="../assets/img/telegram.svg" alt="Workflow"/></a>
            <a href="#" className="mx-5 opacity-75 hover:bg-gray-300 rounded-full p-2.5 flex justify-center"><img className="block h-4 w-auto" src="../assets/img/facebook.svg" alt="Workflow"/></a>
            <a href="#" className="mx-5 opacity-75 hover:bg-gray-300 rounded-full p-2.5 flex justify-center"><img className="block h-4 w-auto" src="../assets/img/instergram.svg" alt="Workflow"/></a>
          </div>
        </div>
        <div className="container mx-auto px-10 ">
          <div className="flex justify-center mt-5 ">
            <div className="w-full max-w-xl px-2 sm:px-0 mb-5">
              <Tab.Group>
                <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-md border-2 w-full -mt-14 bg-white">
                    <Tab
                      className={
                        classNames(
                          'w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg',
                          'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                           'bg-green-50 shadow'
                        )
                      }
                    >
                     <Link href="/holoride">
                        <a href="#" className="h-9 px-3 py-2 rounded-md text-sm flex items-center" aria-current="page">
                            <img className="block h-8 w-5 mr-3" src="../assets/img/rationale.svg" alt="logo"/>
                              Rationale
                        </a>
                      </Link>
                    </Tab>
                    <Tab
                      className={
                        classNames(
                          'w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg',
                          'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                          'text-blue-100 '
                        )
                      }
                    >
                      <Link href="/holoride/metrics">
                        <a href="#" className="h-9 px-3 py-2 rounded-md text-sm flex items-center" aria-current="page">
                            <img className="block h-8 w-5 mr-3" src="../assets/img/rationale.svg" alt="logo"/>
                              Metrics
                        </a>
                      </Link>
                    </Tab>
                    <Tab
                      className={
                        classNames(
                          'w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg',
                          'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                          'text-blue-100 '
                        )
                      }
                    >
                      <Link href="/holoride/guide">
                        <a href="#" className="h-9 px-3 py-2 rounded-md text-sm flex items-center" aria-current="page">
                            <img className="block h-8 w-5 mr-3" src="../assets/img/rationale.svg" alt="logo"/>
                              How to Guide
                        </a>
                      </Link>
                    </Tab>
                </Tab.List>
                {/* <Tab.Panels className="mt-2 border-2 ">
                    <Tab.Panel
                      className={classNames(
                        'bg-white rounded-xl p-3',
                        'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                        'w-full p-30'
                      )}
                    >
                      1
                    </Tab.Panel>
                    <Tab.Panel
                      className={classNames(
                        'bg-white rounded-xl p-3',
                        'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
                      )}
                    >
                      2
                    </Tab.Panel>
                    <Tab.Panel
                      className={classNames(
                        'bg-white rounded-xl p-3',
                        'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
                      )}
                    >
                      3
                    </Tab.Panel>
                </Tab.Panels> */}
              </Tab.Group>
            </div>

          </div>
          
          <div className="">
            <img className="w-full rounded-md" src="./assets/img/cover-1.jpg" alt="Cover image"  />
          </div>
          <div className="text-sm text-gray-600 mt-5">
            The automotive industry is experiencing a technology-driven renaissance. Cars are getting safer, more efficient, autonomous, and equipped with more convenient options for the driver.
            <br/>
            <br/>
            The passengers, however, have not been receiving the same attention, and trips are not getting any shorter. The legacy in-vehicle entertainment/comfort options do little to alleviate impatience, boredom, or even car sickness, especially with teens and children involved.
            <br/>
            <br/>
            But what if there was a way to make every moment spent in transit into a captivating adventure?
          </div>
          <div className="text-holoride mt-5">
            Enter holoride: transforming each car ride into a vivid entertainment and memorable experience
          </div>
          <div className="text-sm text-gray-600 mt-5">
            Extended Reality (XR) technologies such as Virtual Reality (VR), Augmented Reality (AR), immersive sound, and haptic feedback set the premise for the riveting next generation of entertainment. holoride brings this technology to the backseat of any car, transforming the passenger travel experience from mundane commutes into vivid, entertaining, and memorable experiences.
            <br/>
            <br/>
            In the 2 1/2 years since its inception, holoride has engaged in collaborations with Audi, Porsche, Daimler, and Ford, as well as heavy hitter media companies such as Universal Pictures, Disney, and Discovery Channel.
            <br/>
            <br/>
            By shaping the reality around the user to integrate vehicle movement in real-time, as well as adapting the content to trip information such as route and duration, everything will be transformed.
            <br/>
            <br/>
            A city traffic commute can be a drone flight through a futuristic city. A boring trip in rainy weather can morph into an exotic underwater expedition. Underground train travel becomes an intergalactic space battle. The seat next to you could be filled by your favorite character in an epic adventure of your choice while you grab an Uber from the airport to a meeting.
            <br/>
            <br/>
            Now, imagine for a second what it would mean for this technology to become the prime gateway for interactive on-demand entertainment, extending the addressable market to the global passenger universe and transportation modes.
          </div>
          <div className="text-holoride mt-5">
            A memorable experience in every car, built on top of internet-scale blockchain performance
          </div>
          <div className="text-sm text-gray-600 mt-5">
            Entertainment experiences are about to be reimagined with holoride’s Extended Reality technologies and first-of-its-kind immersive media platform. A new market is opening up with vast opportunities for developers and content creators all over the world.
            <br/>
            <br/>
            Transparency and new economic incentives built via the Elrond blockchain offer a new layer of trust that will deeply align interests for users, content creators, media companies, and car manufacturers for the first time, and will significantly enhance user experiences within the holoride ecosystem.
            <br/>
            <br/>
            holoride’s novel combination of technologies is set to effectively augment the value of every vehicle, transforming them from a mode of transportation into a gateway device for hyper-immersive entertainment, education, and mindfulness experiences.
            <br/>
            <br/>
            This is the future of every car. And of every moving vehicle.
            holoride is here. And it will redefine travel experiences forever.
          </div>
          <div className="text-holoride mt-5 flex justify-center mt-5 mb-5">
              <Link href="/holoride/metrics">
                <a href="#" className="bg-gray-100 text-gray-100 bg-blue-700 lg:h-12 px-3 py-2 rounded-md text-sm flex items-center w-52 flex justify-center" aria-current="page">
                    Show Metrics
                </a>
              </Link>
          </div>
        </div>
      </div>

      <div className="lg:w-3/12 md:w-full inline-block	lg:absolute mx-3 bg-gray-50 border-r-2 border-l-2 border-b-2 rounded-md shadow-2xl">
        <div className="container mx-auto px-1 border-b-2">
          <div className="shadow-lg">
            <img className="w-full round-md" src="./assets/img/announcement.jpg" alt="Cover image"  />
          </div>
       </div>
       <div className="container mx-auto px-3 border-b-2">
          <div className="text-center text-gray-500 mt-8">
            <div className="text-sm">
              Offered tokens
            </div>
            <div className="text-lg">
              50,000,000 RIDE
            </div>
          </div>
          <div className="text-center text-gray-500 mt-5">
            <div className="text-sm">
              Raised in Public Sale
            </div>
            <div className="text-lg">
              $2,000,000 USD
            </div>
          </div>
          <div className="text-center text-gray-500 mt-5">
            <div className="text-sm">
              Price per Token
            </div>
            <div className="text-lg">
              $0.04 USD
            </div>
          </div>
       </div>
      </div>
     
    </div>
  )
}
