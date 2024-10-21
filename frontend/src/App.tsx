import { About } from "./components/About";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Technologies } from "./components/Technologies";
import { Navbar } from "./components/Navbar";
import { Newsletter } from "./components/Newsletter";
import { ScrollToTop } from "./components/ScrollToTop";
import { Team } from "./components/Team";
import { Milestone } from "./components/Milestone";
import { Documents } from "./components/Documents";
import { Presentation } from "./components/Presentation";
import "./App.css";
import LiteratureSurvey from "./components/LiteratureSurvey";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Sponsors /> */}
      <About />
      {/* <HowItWorks /> */}
      <Technologies />
      {/* <Features />
      <Services /> */}
      <Milestone />
      <Documents/>
      <Presentation/>
      {/* <Cta />
      <Testimonials /> */}
      <Team />
      {/* <Pricing /> */}
      <LiteratureSurvey/>
      <Newsletter />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
