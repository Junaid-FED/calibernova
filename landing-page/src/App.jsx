import Navbar from "../src/components/NavBar";
import AboutUs from "./components/AboutUs";
import Aniversary from "./components/Aniversary";
import Course from "./components/Course";
import Footer from "./components/Footer";
import SpinWheel from "./components/SpinWheel";



function App() {

  return (
    <div className="main-app">
      <Navbar />
      <SpinWheel />
      <AboutUs />
      <Course />
      <Aniversary />
      <Footer />

    </div>
  )
}

export default App;
