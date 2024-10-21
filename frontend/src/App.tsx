import { About } from "./components/About";
import { Cta } from "./components/Cta";
import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { Newsletter } from "./components/Newsletter";
import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { Sponsors } from "./components/Sponsors";
import { Team } from "./components/Team";
import { Testimonials } from "./components/Testimonials";
import Timeline from './components/Timeline';

import "./App.css";



const timelineItems = [
  {
    time: 'March 2023',
    title: 'Project Kickoff',
    description: 'Initial planning and project kickoff with the team.',
  },
  {
    time: 'June 2023',
    title: 'Development Phase',
    description: 'Began development on the core features of the application.',
  },
  {
    time: 'September 2023',
    title: 'Launch',
    description: 'Successfully launched the application to the public.',
  },
];

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sponsors />
      <About />
      <HowItWorks />
      <div className="container mx-auto p-6">
      <Timeline items={timelineItems} />
      </div>
      <Features />
      <Services />
      <Cta />
      <Testimonials />
      <Team />
      <Pricing />
      <Newsletter />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
