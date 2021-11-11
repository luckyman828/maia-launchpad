


export default function Home() {
  return (
    <div className="mt-24">
      <div className="flex flex-col justify-center">
        <div className="flex justify-center">
          <h2 className="text-2xl">Technology Is The Fundamental Driver For </h2>
          <div className="text-2xl mx-2" data-testid="typewriter-wrapper">
            <span className="Typewriter__wrapper"> Evolution</span><span className="Typewriter__cursor">|</span>
          </div>
        </div>
        <div className="flex justify-center mt-10"><p>We back determined teams, solving hard problems, with global impact.<br/>
          Raise funds, build a community, deliver a technology that improves the world.</p>
        </div>

        <img className="border-8 border-gray-100 shadow-2xl mt-24" src="./assets/img/cover.jpg" alt="Cover image"></img>

      </div>
    </div>
  )
}
