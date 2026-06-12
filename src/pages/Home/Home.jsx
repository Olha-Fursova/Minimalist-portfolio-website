import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import HomeCTA from "./sections/HomeCTA/HomeCTA";

const Home = () => {
  return (
    <>
    {/* Hero section component */}
      <Hero />
    
    {/* About section component */}
      <About />

    {/* Home CTA section component */}
      <HomeCTA />
    </>
  )
}

export default Home;