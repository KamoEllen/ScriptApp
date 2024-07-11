import { Cta } from "./components/Cta";
import { FAQ } from "./components/FAQ";
import { ContactUs } from "./components/ContactUs";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { Newsletter } from "./components/Newsletter";
import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
import { Testimonials } from "./components/Testimonials";
import "./App.css";


function App() {
  return (
    <>
      <Navbar />

      <section id="home">
      <Hero />
      </section>


      <section id="features">
      <HowItWorks />
      </section>
      
     <section id="tutorial">
      <Cta />
     </section>
      
      <Testimonials />
      <section id="pricing">
      <Pricing />
      </section>

      <section id="contact">
      <Newsletter />
        
      </section>

      <section id="faq">
      <FAQ />
      </section>

         <section id="faq">
      <ContactUs />
      </section>

      <section id="footer">
      <Footer />
      </section>

      <ScrollToTop />
    </>
  );
}

export default App;


