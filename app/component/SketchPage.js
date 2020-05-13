import React, { useEffect } from "react"

function SketchPage() {
  useEffect(() => {
    document.title = "Sketch | Fluid Mind"
    window.scrollTo(0, 0)
  })

  return (
    <div>
      <section className="sketch-header">
        <div className="hero-text-box-sketch">
          <h1>NATURE OF THE SELF</h1>
          <p>This section includes the sketches I did with creative coding, which encourages me to discover the nature of myself</p>
        </div>
      </section>
      <section className="gallery">
        <div className="row rowBox">
          <div className="col span-1-of-3 sketchThumb">
            <a href="../sub_sketches/sub_sketches_flow_2.html" target="_blank">
              <img src="../resource/assets/c1.png" />
            </a>
            <p>Desire for Order</p>
          </div>
          <div className="col span-1-of-3 sketchThumb">
            <a href="../sub_sketches/sub_sketches_force_1.html" target="_blank">
              <img src="../resource/assets/c2.png" />
            </a>
            <p>Digital Slave</p>
          </div>
          <div className="col span-1-of-3 sketchThumb">
            <a href="../sub_sketches/sub_sketches_flow_1.html" target="_blank">
              <img src="../resource/assets/c3.png" />
            </a>
            <p>Illusory</p>
          </div>
        </div>

        <div className="row rowBox">
          <div className="col span-1-of-3 sketchThumb">
            <a href="../sub_sketches/sub_sketches_ps_1.html" target="_blank">
              <img src="../resource/assets/c4.png" />
            </a>
            <p>Neurological Disorders</p>
          </div>
          <div className="col span-1-of-3 sketchThumb">
            <a href="../sub_sketches/sub_sketches_ps_2.html" target="_blank">
              <img src="../resource/assets/c5.png" />
            </a>
            <p>Undisciplined</p>
          </div>
          <div className="col span-1-of-3 sketchThumb">
            <a href="../sub_sketches/sub_sketches_organic.html" target="_blank">
              <img src="../resource/assets/c6.png" />
            </a>
            <p>Lost</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SketchPage
