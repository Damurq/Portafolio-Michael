import React, { useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { useSelector } from 'react-redux'

// Local
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home/Home"
import AboutMe from "./pages/AboutMe/AboutMe"
import Project from "./pages/Project/Project"
import Portfolio from "./pages/Portfolio/Portfolio"
// Styles
import "./App.css"
import "./Animations.css"

function App() {
  const theme = useSelector((state) => state.theme.currentTheme)

  useEffect(() => {
    const elements = document.querySelectorAll(".animate")
    const scrollAnimation = () => {
      let topScreen = document.documentElement.scrollTop;
      elements.forEach((element, index) => {
        let top = element.offsetTop;
        if (top - 450 < topScreen) {
          if (element.classList.contains("animate-left"))
            element.classList.add("scale-in-hor-left");
          else {
            element.classList.add("scale-in-hor-right");
          }
        }
      })
    }
    window.addEventListener("scroll", scrollAnimation);
  }, []);


  return (
    <div className={theme} id="theme">
      <Router>
        <div className="App">
          <Navbar />
          <div className="Content">
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
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;