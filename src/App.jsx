import { useState } from "react";
import AllPlayers from "./components/AllPlayers/AllPlayers";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import NewsletterSubscribe from "./components/NewsletterSubscribe/NewsletterSubscribe";

function App() {
  const [isActive, setIsActive] = useState({
    allPlayers: true,
    status: "available",
  });

  const handleIsActive = (status) => {
    status === "available"
      ? setIsActive({ allPlayers: true, status: "available" })
      : setIsActive({ allPlayers: false, status: "selected" });
  };

  return (
    <>
      <div className="w-11/12 mx-auto">
        <Navbar />
        <Hero />
        <AllPlayers handleIsActive={handleIsActive} isActive={isActive} />
        <NewsletterSubscribe />
        <Footer />
      </div>
    </>
  );
}

export default App;
