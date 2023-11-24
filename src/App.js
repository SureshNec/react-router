import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import About from "./pages/About";
import Navbar from "./Components/Navbar";
import Portfolio from "./pages/PortfolioPage/Portfolio";
import WebSite from "./pages/PortfolioPage/WebSite";
import GraphicDesign from "./pages/PortfolioPage/GraphicDesign";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Portfolio' element={<Portfolio />}>
          <Route index element={<WebSite />} />
          <Route path='WebSite' element={<WebSite />} />
          <Route path='GraphicDesign' element={<GraphicDesign />} />
        </Route>
        <Route path='/About' element={<About />} />
        <Route path='*' element={<h1>No results found 🤷</h1>} />
      </Routes>
    </div>
  );
}

export default App;
