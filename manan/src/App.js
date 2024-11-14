import "./App.css";
import Advantages from "./component/Advantages";
import Enroll from "./component/Enroll";
import Features from "./component/Features";
import Footer from "./component/Footer";
import HeroSection from "./component/HeroSection";
import Questions from "./component/Questions";
import Services from "./component/Services";

function App() {
  return (
    <div className="App">
      <div style={{ fontFamily: "'Cormorant', serif" }}>
        <HeroSection />
        <Enroll />
        <Features />
        <Services />
        <Advantages />
        <Questions />
        <Footer />
      </div>
    </div>
  );
}

export default App;
