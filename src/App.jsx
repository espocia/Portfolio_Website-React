import {
  About,
  Footer,
  Header,
  Skills,
  Testimonials,
  Works,
} from "./container";
import { Navbar } from "./components";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Works />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
