import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="w-11/12 mx-auto">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}

export default App;
