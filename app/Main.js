import React from "react"
import ReactDom from "react-dom"
import { BrowserRouter, Switch, Route } from "react-router-dom"

//my components
import Navigation from "./component/Navigation"
import Footer from "./component/Footer"
import Homepage from "./component/Homepage"
import ProjectPage from "./component/ProjectPage"
import SketchPage from "./component/SketchPage"

function Main() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/Homepage" exact>
          <Homepage />
        </Route>
        <Route path="/ProjectPage" exact>
          <ProjectPage />
        </Route>
        <Route path="/SketchPage" exact>
          <SketchPage />
        </Route>
      </Switch>

      <Footer />
    </BrowserRouter>
  )
}

ReactDom.render(<Main />, document.querySelector("#app"))

//silky transition
if (module.hot) {
  module.hot.accept()
}
