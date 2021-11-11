import Link from 'next/link'

export default function Holoride() {
  return (
    <div className="flex">
      <div className="lg:w-4/6 md:w-full">
        <div className="shadow-lg">
          <img className="w-full border-8 border-gray-200 shadow-2xl" src="./assets/img/cover.jpg" alt="Cover image"  />
        </div>
      </div>

      <div className="lg:w-2/5 md:w-full">
        <div className="shadow-lg">
          <img className="w-full border-8 border-gray-200 shadow-2xl" src="./assets/img/cover.jpg" alt="Cover image"  />
        </div>
      </div>
     
    </div>
  )
}
