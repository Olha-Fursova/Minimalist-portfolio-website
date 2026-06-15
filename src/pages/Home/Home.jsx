import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import CTA from "../../components/CTA/CTA";

const Home = () => {
  return (
    <>
    {/* Hero section component */}
      <Hero />
    
    {/* About section component */}
      <About />

    {/* Home CTA section component */}
      <CTA />
    </>
  )
}

export default Home;