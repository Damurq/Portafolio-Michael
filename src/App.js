import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home"
import AboutMe from "./pages/AboutMe/AboutMe"
import Project from "./pages/Project/Project"
import Portfolio from "./pages/Portfolio/Portfolio"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"
import "./Animations.css"
import { useEffect } from "react"

function App() {

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
    <div className="DARK" id="theme">
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
              <Route path="/contact/">
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

/**sass --watch sass/pages:pages
 sass --watch sass/components:components
 cd Documents\Codigos\Progra WEB\Practice\Javascript\React\Portafolio-Michael/src
*/
