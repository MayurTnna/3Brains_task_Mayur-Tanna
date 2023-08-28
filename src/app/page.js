import About from "./About/page";
import Contact from "./Contact/page";
import Footer from "./Footer/page";
import Header from "./Header/page";
import MainSection from "./MainSection/page";
import Portfolio from "./Portfolio/page";

export default function Home() {
  return (
    <>
      <Header />
      <MainSection />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
