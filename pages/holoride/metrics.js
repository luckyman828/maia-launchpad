import Link from 'next/link'
import { Tab } from '@headlessui/react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Card from '../components/holorides/Card'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Metrics() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const member = {
    img_url : "../assets/img/dirk-ahlborn.png",
    name : "Dirk-ahlborn",
    stuff : "Co-founder & hief Executive Officer",
    service : "Served as Managing Director of one of Europe’s leading market-listed digital agencies. Former Head of Digital Business at German premium car manufacturer Audi. Nils was named “Rising Star 2020” by Automotive News Europe.",
    contactInfo : {
      twitter : "#",
      linkedin : "#"
    }, 
  }

  const advisor = {
    img_url : "../assets/img/advisor.png",
    name : "Anthony & Joseph Russo",
    stuff : "Directors, Avengers: Infinity War & Endgame",
    service : "The Russo Brothers are American film and TV directors best known for their four installments in the Marvel Cinematic Universe, including Avengers: Infinity War (2018) and Endgame (2019). They advise holoride from an entertainment and storytelling perspective.",
    contactInfo : {
      twitter : "#",
      linkedin : "#"
    }, 
  }

  return (
    
    <div className="sm:flex sm:flex-col-reverse md:flex md:flex-col-reverse 2xl:flex 2xl:justify-beetween xl:flex xl:justify-beetween lg:flex lg:flex-col-reverse mt-10">

      <div className="2xl:w-8/12 xl:w-8/12 lg:w-full md:w-full xl:mx-3 2xl:mx-3 bg-gray-50 border-r-2 border-l-2 border-b-2 rounded-md shadow-2xl">
        <div className="px-10 border-b-2">
          
          <div className="flex justify-center mt-5 mb-5">
            <img className="w-30 " src="../assets/img/holoride.png" alt="Cover image"  />
          </div>
          <div className="flex justify-center mt-5 mb-5 text-center text-gray-600 text-holoride">
            Audi-backed holoride To Transform Every Car Ride Into The Ultimate<br/> Entertainment Experience Via Extended Reality And NFTs On The <br/>Elrond Blockchain
          </div>
          <div className="flex justify-center mt-5 mb-20">
            <a href="#" className="mx-5 opacity-75 hover:bg-gray-300 rounded-full p-2.5 flex justify-center"><img className="block h-4 w-auto" src="../assets/img/twitter.svg" alt="Workflow"/></a>
            <a href="#" className="mx-5 opacity-75 hover:bg-gray-300 rounded-full p-2.5 flex justify-center"><img className="block h-4 w-auto" src="../assets/img/telegram.svg" alt="Workflow"/></a>
            <a href="#" className="mx-5 opacity-75 hover:bg-gray-300 rounded-full p-2.5 flex justify-center"><img className="block h-4 w-auto" src="../assets/img/facebook.svg" alt="Workflow"/></a>
            <a href="#" className="mx-5 opacity-75 hover:bg-gray-300 rounded-full p-2.5 flex justify-center"><img className="block h-4 w-auto" src="../assets/img/linkedin.svg" alt="Workflow"/></a>
          </div>
        </div>
        <div className="px-10 ">
          <div className="flex justify-center mt-5 ">
            <div className="w-full max-w-xl px-2 sm:px-0 mb-5">
              <Tab.Group>
                <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-md border-2 w-full -mt-14 bg-white">
                    <Tab
                      className={
                        classNames(
                          'w-full py-2.5 text-sm leading-5 font-medium text-gray-500 rounded-lg',
                          'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                          'bg-green-50 shadow'
                        )
                      }
                    >
                     <Link href="/holoride">
                        <a href="#" className="h-9 px-3 py-2 rounded-md text-sm flex items-center" aria-current="page">
                            <img className="block h-8 w-5 mr-3 opacity-70" src="../assets/img/rationale.svg" alt="logo"/>
                              Rationale
                        </a>
                      </Link>
                    </Tab>
                    <Tab
                      className={
                        classNames(
                          'w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg',
                          'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                          'bg-green-50 shadow'
                        )
                      }
                    >
                      <Link href="/holoride/metrics">
                        <a href="#" className="h-9 px-3 py-2 rounded-md text-sm flex items-center" aria-current="page">
                            <img className="block h-8 w-5 mr-3 " src="../assets/img/metrics-active.svg" alt="logo"/>
                              Metrics
                        </a>
                      </Link>
                    </Tab>
                    <Tab
                      className={
                        classNames(
                          'w-full py-2.5 text-sm leading-5 font-medium text-gray-500 rounded-lg',
                          'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                          
                        )
                      }
                    >
                      <Link href="/holoride/guide">
                        <a href="#" className="h-9 px-3 py-2 rounded-md text-sm flex items-center" aria-current="page">
                            <img className="block h-8 w-5 mr-3 opacity-70" src="../assets/img/guide.svg" alt="logo"/>
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
            <img className="w-full rounded-md" src="../assets/img/cover-1.jpg" alt="Cover image"  />
          </div>
          
          <div className="text-holoride mt-5">
            What is holoride?
          </div>
          <div className="text-sm text-gray-600 mt-5">
            holoride takes everyday journeys and transforms them into hyper-immersive experiences by combining navigational car data, extended reality (XR) and blockchain technology.
            <br/>
            <br/>
            In the 2 1/2 years since its inception, holoride has engaged in collaborations with Audi, Porsche, Daimler, and Ford, as well as heavy hitter media companies such as Universal Pictures, Disney, and Discovery Channel.
            <br/>
            <br/>
            holoride will use the high throughput, inexpensive, carbon-negative, and user-friendly Elrond blockchain to enable a sustainable economy driven by a compelling set of economic incentives such as unique NFTs and social currencies to significantly enhance the user experience.
            
          </div>
          <div className="text-holoride mt-5">
            Trusted by
          </div>

          <div className="">
            <img className="w-full rounded-md" src="../assets/img/trusted.png" alt="Cover image"  />
          </div>

          <div className="text-holoride text-gray-500 mt-5 ">
            Team
          </div>

          <div className="text-sm text-gray-600 mt-5">
            As of October 2021, the holoride team consists of more than 30 full-time employees (and growing) from 10 different nationalities. Previous employers include Audi, Amazon, Apple, BMW, Byton, NIO, and XING. The founders team consists of the following individuals:
          </div>
          
          {/* <div className="2xl:flex 2xl:justify-center xl:flex xl:justify-center lg:flex lg:justify-center lg:block md:block sm:block text-center mt-5"> */}
          <div class="grid 2xl:grid-cols-3 2xl:grid-cols-3 lg:grid-cols-1 md:grid-cols-1sm:grid-cols-1 text-center gap-4"> 
            <Card
              img_url = {member.img_url}
              name = {member.name}
              stuff = {member.stuff}
              service = {member.service}
              contactInfo = {member.contactInfo}
            ></Card>

            <Card
              img_url = {member.img_url}
              name = {member.name}
              stuff = {member.stuff}
              service = {member.service}
              contactInfo = {member.contactInfo}
            ></Card>

            <Card
              img_url = {member.img_url}
              name = {member.name}
              stuff = {member.stuff}
              service = {member.service}
              contactInfo = {member.contactInfo}
            ></Card>
            
          </div>

          <div className="text-holoride text-gray-500 mt-5 ">
            Team
          </div>

          {/* <div className="2xl:flex 2xl:justify-center xl:flex xl:justify-center lg:flex lg:justify-center lg:block md:block sm:block text-center mt-5"> */}
          <div class="grid 2xl:grid-cols-3 2xl:grid-cols-3 lg:grid-cols-1 md:grid-cols-1sm:grid-cols-1 text-center gap-4"> 
            <Card
              img_url = {advisor.img_url}
              name = {advisor.name}
              stuff = {advisor.stuff}
              service = {advisor.service}
              contactInfo = {advisor.contactInfo}
            ></Card>

            <Card
              img_url = {advisor.img_url}
              name = {advisor.name}
              stuff = {advisor.stuff}
              service = {advisor.service}
              contactInfo = {advisor.contactInfo}
            ></Card>

            <Card
              img_url = {advisor.img_url}
              name = {advisor.name}
              stuff = {advisor.stuff}
              service = {advisor.service}
              contactInfo = {advisor.contactInfo}
            ></Card>

            <Card
              img_url = {advisor.img_url}
              name = {advisor.name}
              stuff = {advisor.stuff}
              service = {advisor.service}
              contactInfo = {advisor.contactInfo}
            ></Card>

            <Card
              img_url = {advisor.img_url}
              name = {advisor.name}
              stuff = {advisor.stuff}
              service = {advisor.service}
              contactInfo = {advisor.contactInfo}
            ></Card>

            <Card
              img_url = {advisor.img_url}
              name = {advisor.name}
              stuff = {advisor.stuff}
              service = {advisor.service}
              contactInfo = {advisor.contactInfo}
            ></Card>

            <Card
              img_url = {advisor.img_url}
              name = {advisor.name}
              stuff = {advisor.stuff}
              service = {advisor.service}
              contactInfo = {advisor.contactInfo}
            ></Card>
            
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

      <div className="2xl:w-4/12 xl:w-4/12 lg:w-full md:w-full xl:mx-3 2xl:mx-3">
        <div className="bg-gray-50 border-r-2 border-l-2 border-b-2 rounded-md shadow-2xl">
          <div className="px-1 border-b-2">
            <div className="shadow-lg">
              <img className="w-full round-md" src="../assets/img/announcement.jpg" alt="Cover image"  />
            </div>
          </div>
          <div className="px-3 border-b-2">
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
            <div className="mb-8">
              <div className="flex items-center justify-center mt-5">
                <button
                  type="button"
                  onClick={openModal}
                  className="w-full flex items-center justify-center rounded-md border-2 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                >
                  
                      <img className="block h-8 w-3 mr-3" src="../assets/img/eligibility.svg" alt="logo"/>
                      Eligibility Tiers
                  
                </button>
              </div>

              <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                  as="div"
                  className="fixed inset-0 z-10 overflow-y-auto bg-opacity-80 bg-gray-300"
                  onClose={closeModal}
                >
                  <div className="min-h-screen px-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Dialog.Overlay className="fixed inset-0" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span
                      className="inline-block h-screen align-middle"
                      aria-hidden="true"
                    >
                      &#8203;
                    </span>
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <div className="inline-block w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                        <div className="flex justify-between">
                          <div>
                            Eligibility
                          </div>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer hover:bg-grey-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={closeModal}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                        <div className="mt-8 ">
                          <table className=" rounded-lg bg-blue-700 w-full">
                            <thead className="h-20 text-white">
                              <tr>
                                <th className="p-5">Tier</th>
                                <th>EGLD <br/>Staked/delegated</th>
                                <th>Max. No. of Tickets <br/> per User</th>
                                <th>Max Amount per <br/>User ($)</th>
                              </tr>
                            </thead>
                            <tbody className="bg-white">
                              <tr>
                                <td className="p-5">Tier 5</td>
                                <td>&gt;= 1 EGLD</td>
                                <td>1</td>
                                <td>$200</td>
                              </tr>

                              <tr>
                                <td className="p-5">Tier 5</td>
                                <td>&gt;= 1 EGLD</td>
                                <td>1</td>
                                <td>$200</td>
                              </tr>

                              <tr>
                                <td className="p-5">Tier 5</td>
                                <td>&gt;= 1 EGLD</td>
                                <td>1</td>
                                <td>$200</td>
                              </tr>

                              <tr>
                                <td className="p-5">Tier 5</td>
                                <td>&gt;= 1 EGLD</td>
                                <td>1</td>
                                <td>$200</td>
                              </tr>

                              <tr>
                                <td className="p-5">Tier 5</td>
                                <td>&gt;= 1 EGLD</td>
                                <td>1</td>
                                <td>$200</td>
                              </tr>
                             
                            </tbody>
                          </table>
                        </div>
                        <div className="my-5">
                          Price per ticket: $200(paid in EGLD)
                        </div>
                        
                      </div>
                    </Transition.Child>
                  </div>
                </Dialog>
              </Transition>
            </div>
          </div>
          <div className="px-3 border-b-2">
            <div className="text-center text-gray-500 mt-8 mb-2">
              Register Now
            </div>
            <div className="mb-5">
              <a href="#" className="text-sm bg-gray-100 border-2 text-gray-100 bg-blue-700 h-10 px-3 py-2 rounded-md text-xs flex items-center justify-center" aria-current="page">
                  <img className="opacity-75 block h-8 w-3 mr-3" src="../assets/img/connect.svg" alt="logo"/>
                  Connect
              </a>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 border-r-2 border-l-2 border-b-2 rounded-md shadow-2xl mt-8">
          <div className="container px-6 py-6">
            <div className="text-holoride text-gray-600">
              Launchpad Timeline
            </div>
            <div className="mt-5 flex justify-start items-start">
              <div className="rounded-full p-1.5 border-2 border-blue-700 bg-blue-700 mt-2"></div>
              <div>
                <div className="pl-2 text-lg">4 November</div>
                <div className="pl-2 text-sm">Registration & KYC begins</div>
              </div>
            </div>

            <div className="mt-5 flex justify-start items-start">
              <div className="rounded-full p-1.5 border-2 border-blue-700 mt-2"></div>
              <div>
                <div className="pl-2 text-lg">22 November</div>
                <div className="pl-2 text-sm">
                  KYC closed<br/>
                  EGLD Staking snapshot
                </div>
              </div>
            </div>

            <div className="mt-5 flex justify-start items-start">
              <div className="rounded-full p-1.5 border-2 border-blue-700 mt-2"></div>
              <div>
                <div className="pl-2 text-lg">24 November</div>
                <div className="pl-2 text-sm">Buy lottery tickets</div>
              </div>
            </div>

            <div className="mt-5 flex justify-start items-start">
              <div className="rounded-full p-1.5 border-2 border-blue-700 mt-2"></div>
              <div>
                <div className="pl-2 text-lg">25 November</div>
                <div className="pl-2 text-sm">Announce Winning tickets</div>
              </div>
            </div>

            <div className="mt-5 flex justify-start items-start">
              <div className="rounded-full p-1.5 border-2 border-blue-700 mt-2"></div>
              <div>
                <div className="pl-2 text-lg">26 November</div>
                <div className="pl-2 text-sm">
                  Winners claim RIDE tokens<br/>
                  All participants claim unspent EGLD
                </div>
              </div>
            </div>
          </div>
          
        </div>

      </div>
    </div>
  )
}
