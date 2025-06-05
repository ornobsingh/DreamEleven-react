
import AllPlayers from "./components/AllPlayers/AllPlayers";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="w-11/12 mx-auto">
        <Navbar />
        <Hero />
        <AllPlayers />
      </div>
    </>
  );
}

export default App;
