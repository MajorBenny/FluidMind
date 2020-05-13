import React, { useEffect } from "react"

function Homepage() {
  useEffect(() => {
    document.title = "Welcome | Fluid Mind"
    window.scrollTo(0, 0)
  })

  return (
    <div>
      <header>
        <div className="hero-text-box">
          <h1>Explore Nature of the Self</h1>
          <p>Generative Forms Experiment</p>
        </div>
      </header>
      <section className="mainProject">
        <div className="fm-intro-home">
          <h2>Fluid Mind 1.0</h2>
          <p className="fm-copy-home">
            Fluid Mind is a speculative visual and interaction design that illustrates the future of seeing and knowing the inner self of people as a daily experience.
            <br />
            With the development of voice interactive technology and the emergence of brain controlled interfaces, I can imagine that the screen-less interaction with objects would be ubiquitous in the future. Based on such assumption, I would like to experiment with the brain controlled technology and propose some ways of generating contents and graphical forms by our own thoughts, in this case, our brain activity.
          </p>
          <a className="learnMore-btn project-btn" href="/ProjectPage">
            Learn More
          </a>
        </div>
      </section>
      <section className="sketchShowcase">
        <div className="sketchIntro-home">
          <h1>Sketching for the Nature</h1>
          <p>Computation drawing is an exciting way to explore the intersection between nature and machine.</p>
          <a className="learnMore-btn sketch-btn" href="/SketchPage">
            Learn More
          </a>
        </div>
      </section>
    </div>
  )
}

export default Homepage
