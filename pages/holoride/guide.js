import Link from 'next/link'
import { Tab } from '@headlessui/react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useWalletModal, useWeb3, wallets } from "@react-dapp/wallet";
import Image from 'next/image'



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

  const { setOpen, deactivate, error: walletError } = useWalletModal();

  return (
    
    <div className="sm:flex sm:flex-col-reverse md:flex md:flex-col-reverse 2xl:flex 2xl:justify-beetween xl:flex xl:justify-beetween lg:flex lg:flex-col-reverse mt-10">

      <div className="2xl:w-8/12 xl:w-8/12 lg:w-full md:w-full xl:mx-3 2xl:mx-3 bg-gray-50 border-r-2 border-l-2 border-b-2 rounded-md shadow-2xl">
        <div className="px-10 border-b-2">
          
          <div className="flex justify-center mt-5 mb-5">
            <Image className="w-30 " src="../assets/img/holoride.png" alt="Cover image"  />
          </div>
          <div className="flex justify-center mt-5 mb-5 text-center text-gray-600 text-holoride">
            Audi-backed holoride To Transform Every Car Ride Into The Ultimate<br/> Entertainment Experience Via Extended Reality And NFTs On The <br/>Elrond Blockchain
          </div>
          <div className="flex justify-center mt-5 mb-20">
            <a href="#" className="mx-5 opacity-75 hover:bg-gray-300 rounded-full p-2.5 flex justify-center"><Image className="block h-4 w-auto" src="../assets/img/twitter.svg" alt="Workflow"/></a>
            <a href="#" className="mx-5 opacity-75 hover:bg-gray-300 rounded-full p-2.5 flex justify-center"><Image className="block h-4 w-auto" src="../assets/img/telegram.svg" alt="Workflow"/></a>
            <a href="#" className="mx-5 opacity-75 hover:bg-gray-300 rounded-full p-2.5 flex justify-center"><Image className="block h-4 w-auto" src="../assets/img/facebook.svg" alt="Workflow"/></a>
            <a href="#" className="mx-5 opacity-75 hover:bg-gray-300 rounded-full p-2.5 flex justify-center"><Image className="block h-4 w-auto" src="../assets/img/linkedin.svg" alt="Workflow"/></a>
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
                          
                        )
                      }
                    >
                     <Link href="/holoride">
                        <a href="#" className="h-9 px-3 py-2 rounded-md text-sm flex items-center" aria-current="page">
                            <Image className="block h-8 w-5 mr-3 opacity-70" src="../assets/img/rationale.svg" alt="logo"/>
                              Rationale
                        </a>
                      </Link>
                    </Tab>
                    <Tab
                      className={
                        classNames(
                          'w-full py-2.5 text-sm leading-5 font-medium  text-gray-500 rounded-lg',
                          'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                          
                        )
                      }
                    >
                      <Link href="/holoride/metrics">
                        <a href="#" className="h-9 px-3 py-2 rounded-md text-sm flex items-center" aria-current="page">
                            <Image className="block h-8 w-5 mr-3 opacity-70" src="../assets/img/metrics.svg" alt="logo"/>
                              Metrics
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
                      <Link href="/holoride/guide">
                        <a href="#" className="h-9 px-3 py-2 rounded-md text-sm flex items-center" aria-current="page">
                            <Image className="block h-8 w-5 mr-3 opacity-70" src="../assets/img/guide-active.svg" alt="logo"/>
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
          
          
          
          <div className="text-holoride mt-5">
          Introducing the holoride (RIDE) Token Sale on the Maiar Launchpad
          </div>
          <div className="text-sm text-gray-600 mt-5">
            We are excited to announce the first project on Maiar Launchpad: holoride (RIDE). The token sale will follow a lottery format, with the recording of user EGLD balances (staked or delegated only) done on 22 November 2021 at a random time during that day.
            <br/>
            <br/>
            Rules for this launchpad:
          </div>
          <div className="text-gray-700">

            <div className="flex justify-start items-start mt-5">
                <div className="rounded-full p-1 border-blue-700 bg-blue-700 mt-1.5"></div>
                <div className="pl-2 text-sm">
                  We will calculate the amount of EGLD delegated or staked for each EGLD address that did and passed the KYC checks. Based on the amount staked or delegated the user will be assigned one of the following tiers:
                </div>
            </div>
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
              <tbody className="bg-white text-center">
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

          <div className="text-sm text-gray-600 mt-5">
            Price per ticket: $200 (paid in EGLD)
            <br/><br/>
            Each tier will give the user the option to buy a maximum number of lottery tickets. The user can choose how many lottery tickets to buy but he will not be able to buy more than the maximum permitted by the tier assigned based on the amount of EGLD staked or delegated.
            <br/><br/>
            Each ticket will cost: $200, to be paid in EGLD; price in EGLD will be determined prior to the lottery draw date. Each winning ticket will receive 5000 RIDE (1 RIDE ≈ $0,04). The non-winning tickets will be able to claim back all funds paid for the tickets after the draw. So this is a no-loss lottery, as no one is losing but not all are winning.
            <br/><br/>
            Please ensure that you follow the timeline further down below carefully if you wish to participate.
          </div>
          
          <div className="text-holoride text-gray-500 mt-5 mb-5">
            Token Sale Details:
          </div>

          <div className="text-gray-700">

            <div className="flex justify-start items-start mt-5">
                <div className="rounded-full p-1 border-blue-700 bg-blue-700 mt-1.5"></div>
                <div className="pl-2 text-sm">
                Token Name: holoride (RIDE)
                </div>
            </div>
            <div className="flex justify-start items-start mt-5">
                <div className="rounded-full p-1 border-blue-700 bg-blue-700 mt-1.5"></div>
                <div className="pl-2 text-sm">
                Hard Cap: 2,000,000 USD
                </div>
            </div>
            <div className="flex justify-start items-start mt-5">
                <div className="rounded-full p-1 border-blue-700 bg-blue-700 mt-1.5"></div>
                <div className="pl-2 text-sm">
                Total Token Supply: 1,000,000,000 RIDE
                </div>
            </div>
            <div className="flex justify-start items-start mt-5">
                <div className="rounded-full p-1 border-blue-700 bg-blue-700 mt-1.5"></div>
                <div className="pl-2 text-sm">
                Initial Token Supply: 130,000,000 RIDE
                </div>
            </div>

            <div className="flex justify-start items-start mt-5">
                <div className="rounded-full p-1 border-blue-700 bg-blue-700 mt-1.5"></div>
                <div className="pl-2 text-sm">
                Total Tokens Allocated to Maiar Launchpad: 50,000,000 RIDE (5% of Total Token Supply)
                </div>
            </div>

            <div className="flex justify-start items-start mt-5">
                <div className="rounded-full p-1 border-blue-700 bg-blue-700 mt-1.5"></div>
                <div className="pl-2 text-sm">
                Public Sale Token Price: 1 RIDE ≈ $0.04
                </div>
            </div>
          </div>

          <div className="text-gray-700 mt-10">

            <div className="flex justify-start items-start mt-5">
                <div className="rounded-full p-1 border-blue-700 bg-blue-700 mt-1.5"></div>
                <div className="pl-2 text-sm">
                Token Sale Format: Lottery
                </div>
            </div>
            <div className="flex justify-start items-start mt-5">
                <div className="rounded-full p-1 border-blue-700 bg-blue-700 mt-1.5"></div>
                <div className="pl-2 text-sm">
                Funding currency: EGLD
                </div>
            </div>
            <div className="flex justify-start items-start mt-5">
                <div className="rounded-full p-1 border-blue-700 bg-blue-700 mt-1.5"></div>
                <div className="pl-2 text-sm">
                EGLD/RIDE parity to be decided based on the EGLD USD spot price on November 24
                </div>
            </div>
            <div className="flex justify-start items-start mt-5">
                <div className="rounded-full p-1 border-blue-700 bg-blue-700 mt-1.5"></div>
                <div className="pl-2 text-sm">
                Purchase lottery tickets: November 24, 2021
                </div>
            </div>

            <div className="flex justify-start items-start mt-5">
                <div className="rounded-full p-1 border-blue-700 bg-blue-700 mt-1.5"></div>
                <div className="pl-2 text-sm">
                Lottery draw for winning tickets: November 25, 2021
                </div>
            </div>

            <div className="flex justify-start items-start mt-5">
                <div className="rounded-full p-1 border-blue-700 bg-blue-700 mt-1.5"></div>
                <div className="pl-2 text-sm">
                Winners claim RIDE token: 26 November 2021
                </div>
            </div>
          </div>

          <div className="text-gray-700 mt-10">

            <div className="flex justify-start items-start mt-5">
                <div className="rounded-full p-1 border-blue-700 bg-blue-700 mt-1.5"></div>
                <div className="pl-2 text-sm">
                Max Number of Winning Lottery Tickets: 10,000
                </div>
            </div>
            <div className="flex justify-start items-start mt-5">
                <div className="rounded-full p-1 border-blue-700 bg-blue-700 mt-1.5"></div>
                <div className="pl-2 text-sm">
                Allocation Per Winning Ticket: $200 (5000 RIDE)
                </div>
            </div>
            <div className="flex justify-start items-start mt-5">
                <div className="rounded-full p-1 border-blue-700 bg-blue-700 mt-1.5"></div>
                <div className="pl-2 text-sm">
                Supported Currency: EGLD only
                </div>
            </div>
            <div className="flex justify-start items-start mt-5">
                <div className="rounded-full p-1 border-blue-700 bg-blue-700 mt-1.5"></div>
                <div className="pl-2 text-sm">
                holoride (RIDE) will be issued on the Elrond Network blockchain as an ESDT asset
                </div>
            </div>
          
          </div>

          <div className="text-holoride text-gray-500 mt-5 mb-5">
            Lottery Timeline:
          </div>
          <div>
            <div className="mt-5 flex justify-start items-start">
              <div className="rounded-full p-1.5 bg-blue-700 mt-2"></div>
              <div>
                <div className="pl-2 text-lg">4 November 2021</div>
                <div className="pl-2 text-sm text-gray-500">KYC (Know-your-Customer) begins</div>
              </div>
            </div>

            <div className="mt-5 flex justify-start items-start">
              <div className="rounded-full p-1 border-2 border-blue-700 mt-2"></div>
              <div>
                <div className="pl-2 text-lg">22 November 2021</div>
                <div className="pl-2 text-sm text-gray-500">KYC closes</div>
                <div className="pl-2 text-sm text-gray-500">Change address not allowed anymore</div>
              </div>
            </div>

            <div className="mt-5 flex justify-start items-start">
              <div className="rounded-full p-1 border-2 border-blue-700 mt-2"></div>
              <div>
                <div className="pl-2 text-lg">22 November 2021</div>
                <div className="pl-2 text-sm text-gray-500">EGLD Holdings Calculation Day</div>
                <div className="pl-2 text-sm text-gray-500">
                Staking and delegation amount snapshot for addresses that passed the KYC. During this day, users&apos; EGLD amount staked or delegated will be recorded at a random time. Your amount of EGLD staked or delegated for that address will determine the Tier and number of tickets that you will be able to buy. Please note that EGLD not staked or delegated will NOT count towards your EGLD holdings calculation.
                </div>
              </div>
            </div>
            
            <div className="mt-5 flex justify-start items-start">
              <div className="rounded-full p-1 border-2 border-blue-700 mt-2"></div>
              <div>
                <div className="pl-2 text-lg">23 November 2021</div>
                <div className="pl-2 text-sm text-gray-500">Calculate no. of tickets eligible per address</div>
                <div className="pl-2 text-sm text-gray-500">This information will be saved in the Launchpad Smart Contract for full transparency.</div>
              </div>
            </div>

            <div className="mt-5 flex justify-start items-start">
              <div className="rounded-full p-1 border-2 border-blue-700 mt-2"></div>
              <div>
                <div className="pl-2 text-lg">24 November 2021 03:00 PM (UTC)</div>
                <div className="pl-2 text-sm text-gray-500">Buy lottery tickets</div>
                <div className="pl-2 text-sm text-gray-500">All eligible users will be able to buy tickets for a 24 hour period. Users must also sign the Token Purchase Agreement at the same time, prior to completing the ticket purchase. EGLD price per lottery ticket to be determined before 03:00 PM (UTC).</div>
              </div>
            </div>

            <div className="mt-5 flex justify-start items-start">
              <div className="rounded-full p-1 border-2 border-blue-700 mt-2"></div>
              <div>
                <div className="pl-2 text-lg">25 November 2021 03:00 PM (UTC)</div>
                <div className="pl-2 text-sm text-gray-500">Ticket buy closes, the lottery draw begins and winning tickets are announced</div>
                
              </div>
            </div>

            <div className="mt-5 flex justify-start items-start">
              <div className="rounded-full p-1 border-2 border-blue-700 mt-2"></div>
              <div>
                <div className="pl-2 text-lg">26 November 2021 03:00 PM (UTC)</div>
                <div className="pl-2 text-sm text-gray-500">Claim RIDE tokens for winning tickets and Claim EGLD for losing tickets</div>
              </div>
            </div>

          </div>
          
          <div className="text-holoride text-gray-500 mt-5 mb-5">
            holoride Project Links:
          </div>
     
          <div className="text-blue-500">

            <div className="flex justify-start items-center ">
                <div className="rounded-full p-1 border-blue-700 bg-blue-700"></div>
                <div className="pl-2 text-md">
                  <Link href="#">
                    <a>Website</a>
                  </Link>
                </div>
            </div>

            <div className="mt-5 flex justify-start items-center">
                <div className="rounded-full p-1 border-blue-700 bg-blue-700"></div>
                <div className="pl-2 text-md">
                  <Link href="#">
                    <a>Litepaper</a>
                  </Link>
                </div>
            </div>

            <div className="mt-5 flex justify-start items-center">
                <div className="rounded-full p-1 border-blue-700 bg-blue-700"></div>
                <div className="pl-2 text-md">
                  <Link href="#">
                    <a>Creator Space</a>
                  </Link>
                </div>
            </div>

            <div className="mt-5 flex justify-start items-center">
                <div className="rounded-full p-1 border-blue-700 bg-blue-700"></div>
                <div className="pl-2 text-md">
                  <Link href="#">
                    <a>Twitter</a>
                  </Link>
                </div>
            </div>

            <div className="mt-5 flex justify-start items-center">
                <div className="rounded-full p-1 border-blue-700 bg-blue-700"></div>
                <div className="pl-2 text-md">
                  <Link href="#">
                    <a>Blog</a>
                  </Link>
                </div>
            </div>
            
          </div>
          
          <div className="text-sm text-gray-600 mt-5">
            Reminder: Users need to complete their account verification (KYC) and also be from an accepted jurisdiction to participate in this token sale.
            <br/><br/>
            * Users from the following countries will not be able to participate in token sales on the Maiar Launchpad platform: Afghanistan, Angola, Belarus, Bosnia & Herzegovina, Burkina Faso; Burundi, Cayman Island, Central African Republic, People’s Republic of China, Congo (DRC), Cote d’Ivoire (Ivory Coast), Cuba, Columbia, Ecuador, Egypt, Eritrea, Ethiopia, Guinea, Guinea-Bissau, Guyana, Haiti, Iran, Iraq, Kosovo, Laos, Lebanon, Liberia, Libya, Macedonia, Maledives, Mali, Marokko; Myanmar, Nigeria, North-Korea, Panama, Pakistan, Papua NG, Republic of Crimea, Serbia, Somalia, Sri Lanka, Senegal; Sudan, South Sudan, Syria, Trinidad and Tobago, Tunisia, Turkmenistan, Uganda, Ukraine, United States of America, Uzbekistan, Vanuatu, Venezuela, Yemen, Zimbabwe.
            <br/><br/>
            <br/>
            Special note for Turkey and Philippines: up to $1000 USD, a maximum of 5 tickets, per person are available to Turkish and Filipino participants, due to regulatory compliance considerations
          </div>
          
          <div className="text-holoride text-gray-500 mt-5 mb-5">
            Legal disclaimer:
          </div>

          <div className="text-sm text-gray-600 mt-5 mb-5">
            All crypto related projects and startups are subject to high market risk. Please make your choice very cautiously as Maiar Launchpad is not intended as, and does not provide, any investment or financial advice whatsoever, you being held completely and fully responsible for your decisions. Maiar Launchpad will choose high-quality projects, but will not be responsible for any losses. Maiar Launchpad does not issue, subscribe, place or accept funds from you in relation with the crypto related projects and startups that are promoted on the Maiar Launchpad platform. For more details about the risks, please consult the T&Cs on Maiar Launchpad’s website.
          </div>
          
          <div className="text-holoride mt-5 flex justify-center mt-15 mb-5">
              <Link href="/holoride/metrics">
                <a href="#" className="bg-gray-100 text-gray-100 bg-blue-700 lg:h-12 px-3 py-2 rounded-md text-sm flex items-center w-52 flex justify-center" aria-current="page">
                  <Image className="opacity-75 block h-8 w-3 mr-3" src="../assets/img/connect.svg" alt="logo"/>
                  Register Now
                </a>
              </Link>
          </div>
        </div>
      </div>

      <div className="2xl:w-4/12 xl:w-4/12 lg:w-full md:w-full xl:mx-3 2xl:mx-3">
        <div className="bg-gray-50 border-r-2 border-l-2 border-b-2 rounded-md shadow-2xl">
          <div className="px-1 border-b-2">
            <div className="shadow-lg">
              <Image className="w-full rounded-md" src="../assets/img/announcement.jpg" alt="Cover image"  />
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
                  
                      <Image className="block h-8 w-3 mr-3" src="../assets/img/eligibility.svg" alt="logo"/>
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
              <a href="#" onClick={() => setOpen(true)}className="text-sm bg-gray-100 border-2 text-gray-100 bg-blue-700 h-10 px-3 py-2 rounded-md text-xs flex items-center justify-center" aria-current="page">
                  <Image className="opacity-75 block h-8 w-3 mr-3" src="../assets/img/connect.svg" alt="logo"/>
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
