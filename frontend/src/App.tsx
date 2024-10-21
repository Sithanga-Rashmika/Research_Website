import { About } from "./components/About";
import { Cta } from "./components/Cta";
import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Technologies } from "./components/Technologies";
import { Navbar } from "./components/Navbar";
import { Newsletter } from "./components/Newsletter";
import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { Sponsors } from "./components/Sponsors";
import { Team } from "./components/Team";
import { Testimonials } from "./components/Testimonials";
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
      <Sponsors />
      <About />
      <HowItWorks />
      <Technologies />
      <Features />
      <Services />
      <Milestone />
      <Documents/>
      <Presentation/>
      <Cta />
      <Testimonials />
      <Team />
      <Pricing />
      <LiteratureSurvey />
      <Newsletter />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
