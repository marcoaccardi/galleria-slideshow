import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Gallery from "./pages/Gallery";
import Slideshow from "./pages/Slideshow";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' component={<Gallery />} />
          <Route exact path='/slideshow' component={<Slideshow />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
