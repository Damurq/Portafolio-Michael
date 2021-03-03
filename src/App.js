import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects/Projects"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"
import { useEffect } from "react"
function App() {
  useEffect(() => {
    const elements= document.querySelectorAll(".animate")
    const scrollAnimation = ()=>{
        let topScreen = document.documentElement.scrollTop;
        elements.forEach((element,index)=>{
            let top = element.offsetTop;
            if(top - 420 < topScreen){
                element.style.opacity = 1;
                element.classList.add("animateTop")
            }
        })
    }
    window.addEventListener("scroll",scrollAnimation); 
  },[]);
  return (
    <div className="Content">
    <Router>
      <div className="App">
        <Navbar />
        <div className="Content">
          <Switch>
            <Route path="/Portfolio/:id">
            </Route>
            <Route path="/Portfolio">
              <Projects />
            </Route>
            <Route path="/contact/">
            </Route>            
            <Route path="/about/">
              <About />
            </Route>   
            <Route exact path="/">
              <Home />
            </Route>         
          </Switch>
        </div>
      </div>
    </Router>
          
    </div>
  );
}

export default App;
