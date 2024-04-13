import { BrowserRouter } from "react-router-dom";

import { About, Contact,Hero,Experience, Navbar, Tech, WorksWeb, WorksMob} from "./components";
import Loader from "./components/partials/Loader"

const App = () => {
  return (
    <BrowserRouter>
    <Loader/>
      <div className='relative z-0 bg-primary overflow-hidden'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>  
        <About />
        <Tech />
        <Experience />
        <WorksWeb />
        <WorksMob />
        <div className='relative z-0'>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
