import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects/Projects"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"
function App() {
  
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
