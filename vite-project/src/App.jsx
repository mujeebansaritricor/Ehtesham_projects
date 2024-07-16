// import Header from "./pages/Header/Header"
import AboutUs from "./pages/AboutUs/AboutUs";
import Clients from "./pages/Clients/Clients";
import Header from "./pages/Header/Header";
import Hero from "./pages/Hero/Hero";
import IconBoxes from "./pages/IconBoxes/IconBoxes";
import Navbar from "./pages/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import WhyUs from "./pages/WhyUs/WhyUs";
import Services from "./pages/Services/Services";
import CtaSection from "./pages/CtaSection/CtaSection";
import PortfolioSection from "./pages/PortfolioSection/PortfolioSection";
import TeamSection from "./pages/TeamSection/TeamSection";
// import PricingSection from "./pages/PricingSection/PricingSection";
import FAQSection from "./pages/FAQSection/FAQSection";
import ContactSection from "./pages/ContactSection/ContactSection";
import Footer from "./pages/Footer/Footer";


function App() {

  return (
    <>
      <div>
   <Navbar/>
   <Header />
   <Hero />
   <IconBoxes/>
   <AboutUs />
   <Clients />
   <WhyUs />
   <Services />
   <CtaSection />
   <PortfolioSection />
   <TeamSection />
   {/* <PricingSection /> */}
   <FAQSection />
   <ContactSection />
   <Footer />
      </div>
    </>
  )
}

export default App
