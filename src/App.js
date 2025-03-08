import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Navbar />
          <main className="container text-white mx-auto px-3 pb-12">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/notfound" element={<NotFound />}></Route>
              <Route path="/*" element={<NotFound />}></Route>
            </Routes>
          </main>
          <Footer></Footer>
        </div>
      </Router>
    </>
  );
}

export default App;
