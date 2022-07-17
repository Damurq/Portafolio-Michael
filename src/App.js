// Third party
import React                                      from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { useSelector }                            from 'react-redux'
// Local
import Navbar           from "./container/Navbar/Navbar"
import Footer           from "./container/Footer/Footer"
import Home             from "./pages/Home/Home"
import AboutMe          from "./pages/AboutMe/AboutMe"
import Project          from "./pages/Project/Project"
import Portfolio        from "./pages/Portfolio/Portfolio"
// Data
import data             from "./data/Components.json"
// Styles
import "./App.css"

function App() {
  const theme = useSelector((state) => state.theme.currentTheme)

  
  return (
    <div className={theme} id="theme">
      <Router>
        <Navbar data={data.Navbar} />
        <Switch>
          <Route path="/Portfolio/:id">
            <Project />
          </Route>
          <Route path="/Portfolio/">
            <Portfolio />
          </Route>
          <Route path="/About-me/">
            <AboutMe />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer data={data.Footer} />
      </Router>
    </div>
  );
}

export default App;