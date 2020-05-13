import React, { useEffect } from "react"

function ProjectPage() {
  useEffect(() => {
    document.title = "Project | Fluid Mind"
    window.scrollTo(0, 0)
  })

  return (
    <div>
      <section className="project-heroImage">
        <div className="project-hero-text-box">
          <div className="row">
            <h2 className="project-intro-title">Fluid Mind v1.0</h2>
            <p className="project-intro-subtitle">Generative Design Driven by Brainwaves</p>
          </div>
          <div className="row">
            <p className="project-intro-body">Fluid Mind is a speculative visual and interaction design that illustrates the future of seeing and knowing the inner self of people as a daily experience.</p>
          </div>
        </div>
      </section>

      {/* introduction */}
      <section className="project-intro">
        <div className="project-intro-text">
          <h2 className="project-intro-title">Visualization of Brainwaves</h2>
          <p className="project-intro-body">
            The brain has billions of neurons, and each individual neuron connects (on average) to thousands of others. Communication happens between them through small electrical currents that travel along the neurons and throughout enormous networks of brain circuits. When all these neurons are activated they produce electrical pulses – visualize a wave rippling through the crowd at a sports arena – this synchronized electrical activity results in a “brainwave”.
            <br />
            Different patterns of brainwaves can be recognized by their amplitudes and frequencies. Brainwaves can then be categorized based on their level of activity or frequency.
            <br />
            My aim for this project is to explore a more poetic and artistic way to visualize the brainwaves, and reveal the invisible beauty of the SELF.
          </p>
        </div>
        <div className="project-intro-image"></div>
      </section>

      {/* inspiration */}
      <section className="project-inspiration-intro">
        <div className="inspiration-image"></div>
        <div className="inspiration-intro">
          <h2>Design Inspiration</h2>
          <p className="project-intro-body">
            My visual motivation came from the famous quote of Bruce Lee, which is "Be Water, My Friend."
            <br />
            To me, water means the conciousness, awareness, and senses of us. Therefore, water would be the best metaphor for the visualization of brainwaves.
            <br />
            In this project, the visual strategy was to illustrates three states of water, which indicates different status of our mind &mdash; meditation and focus.
          </p>
          <div className="row inspiration-box">
            <div className="col span-1-of-3 inspiration-icon">
              <img className="insp-icon" src="../resource/assets/inspir-1.png" />
              <p>Liquid</p>
            </div>
            <div className="col span-1-of-3 inspiration-icon">
              <img className="insp-icon" src="../resource/assets/inspir-2.png" />
              <p>Solid</p>
            </div>
            <div className="col span-1-of-3 inspiration-icon">
              <img className="insp-icon" src="../resource/assets/inspir-3.png" />
              <p>Gas</p>
            </div>
          </div>
        </div>
      </section>

      {/* --Visual Design-- */}
      <section className="visual-design-showcase">
        <div className="row visual-design-textbox">
          <h2>Visual Design</h2>
          <p>The final design was built in Unity, an popular 3D engine used in the game industry and the new media art industry.</p>
        </div>
        <div className="row visual-design-image">
          <div className="col span-1-of-3">
            <img className="vd-image" src="../resource/assets/vd-liquid.png" />
            <p>Liquid | Meditation</p>
          </div>
          <div className="col span-1-of-3">
            <img className="vd-image" src="../resource/assets/vd-solid.png" />
            <p>Solid | Attention</p>
          </div>
          <div className="col span-1-of-3">
            <img className="vd-image" src="../resource/assets/vd-gas.png" />
            <p>Gas | Creation</p>
          </div>
        </div>
      </section>

      {/* --Visual Design-- */}
      <section className="visual-design-sequence">
        <div className="row sequence-textbox">
          <h2>Iteration</h2>
        </div>
        <div className="image-box">
          <img src="../resource/assets/sequence-06.png" />
        </div>
      </section>

      {/* --Video-- */}
      <section className="project-video">
        <div className="row project-video-text">
          <h2>Fluid Mind Concept Film</h2>
        </div>
        <div className="video-box">
          <video width="1080" height="auto" controls>
            <source src="../resource/assets/FluidMind_finalproject.mp4" />
          </video>
          <img className="video-scenes" src="../resource/assets/video-scenes.png" />
        </div>
      </section>
    </div>
  )
}

export default ProjectPage
