// Third party
import React                                      from "react"
import { BrowserRouter as Router, Switch, Route, Redirect  } from "react-router-dom"
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
  const {theme, language} = useSelector((state) => state)

  
  return (
    <div className={theme.currentTheme} id="theme">
      <Router>
        <Navbar data={data[language.currentLanguage].Navbar} />
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
        <Footer data={data[language.currentLanguage].Footer} />
      </Router>
    </div>
  );
}

export default App;