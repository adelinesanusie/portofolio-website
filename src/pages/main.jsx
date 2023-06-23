import Navbar from "../components/navbar";
import Home from "./home";
import Experiences from "./experiences";
import Gallery from "./gallery";
import Skills from "./skills";
import Contact from "./contact";

function Main() {
  return (
    <>
    <Navbar />
    <Home />
    <Experiences />
    <Gallery />
    <Skills />
    <Contact />
    </>
  );
}

export default Main;