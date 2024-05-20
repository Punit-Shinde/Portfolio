import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  About,
  Contact,
  Hero,
  Experience,
  Navbar,
  Tech,
  WorksWeb,
  WorksStatic,
  WorksMob,
  Certificates,
} from "./components";
import Loader from "./components/partials/Loader";
import AllProjects from "./components/AllProjects"; // import the new component

const App = () => {
  return (
    <BrowserRouter>
      <Loader />
      <div className="relative z-0 bg-primary overflow-hidden">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <Routes>
          <Route path="/Portfolio" element={
            <>
              <About />
              <Tech />
              <Experience />
              <WorksWeb />
              <WorksStatic />
              <WorksMob />
              <Certificates />
              <div className="relative z-0">
                <Contact />
              </div>
            </>
          } />
          <Route path="/Portfolio/all-projects" element={<AllProjects />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
