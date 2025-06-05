import AllPlayers from "./components/AllPlayers/AllPlayers";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import NewsletterSubscribe from "./components/NewsletterSubscribe/NewsletterSubscribe";

function App() {
  return (
    <>
      <div className="w-11/12 mx-auto">
        <Navbar />
        <Hero />
        <AllPlayers />
        <NewsletterSubscribe />
        <Footer />
      </div>
    </>
  );
}

export default App;
