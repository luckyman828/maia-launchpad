


export default function Home() {
  return (
    <div className="mt-24">
      <div className="flex flex-col justify-center">
        <div className="flex justify-center">
          <h2 className="text-4xl text-gray-600">Technology Is The Fundamental Driver For </h2>
          <div className="text-4xl text-gray-600 mx-2" data-testid="typewriter-wrapper">
            <span className="Typewriter__wrapper"> Evolution</span><span className="Typewriter__cursor">|</span>
          </div>
        </div>
        <div className="flex text-xl text-gray-400 justify-center mt-10"><p>We back determined teams, solving hard problems, with global impact.<br/>
          Raise funds, build a community, deliver a technology that improves the world.</p>
        </div>

        <img className="border-8 border-gray-100 shadow-2xl mt-24 w-full m-auto" src="./assets/img/cover.jpg" alt="Cover image"></img>
        <h1 class="text text-white absolute">Enter holoride</h1>
        <div className="flex space-x-4 ml-2">
          <a href="#" className="bg-gray-100 border-2 text-gray-100 bg-blue-700 h-9 px-3 py-2 rounded-md text-xs flex items-center justify-between" aria-current="page">
              View Project
          </a>
        </div>

      </div>
    </div>
  )
}
