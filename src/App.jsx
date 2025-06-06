import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import NewsletterSubscribe from "./components/NewsletterSubscribe/NewsletterSubscribe";
import AvailablePlayersNav from "./components/AvailablePlayersNav/AvailablePlayersNav";

function App() {
  // active state....
  const [isActive, setIsActive] = useState({
    allPlayers: true,
    status: "available",
  });

  // selected state....
  const [selectedPlayer, setSelectedPlayer] = useState([]);

  // increase balance state....
  const [increaseBalance, setIncreaseBalance] = useState(0);

  // handle delete player
  const handleDeletePlayer = (id) => {
    const remainingPlayer = selectedPlayer.filter((p) => p.playerId !== id);
    setSelectedPlayer(remainingPlayer);
  };

  // increase balance function....
  const handleAddBalance = () => {
    setIncreaseBalance(increaseBalance + 60000);
  };

  // selected function.....
  const handleSelectedPlayer = (player) => {
    if (selectedPlayer.length >= 6) {
      return alert("You can only select up to 6 players!");
    }

    if (increaseBalance < player.biddingPrice) {
      // balance decrease....
      return alert("Not enough balance to select this player!");
    }

    const isExist = selectedPlayer.find((p) => p.playerId === player.playerId);

    if (!isExist) {
      setSelectedPlayer([...selectedPlayer, player]);
      setIncreaseBalance(increaseBalance - player.biddingPrice); // balance decrease....
    } else {
      alert(`${player.name} already there !`);
    }
  };

  // active function.....
  const handleIsActive = (status) => {
    status === "available"
      ? setIsActive({ allPlayers: true, status: "available" })
      : setIsActive({ allPlayers: false, status: "selected" });
  };

  return (
    <>
      <div className="w-11/12 mx-auto">
        <Navbar increaseBalance={increaseBalance} />
        <Hero handleAddBalance={handleAddBalance} />
        <AvailablePlayersNav
          handleDeletePlayer={handleDeletePlayer}
          selectedPlayer={selectedPlayer}
          handleSelectedPlayer={handleSelectedPlayer}
          handleIsActive={handleIsActive}
          isActive={isActive}
        />
        <NewsletterSubscribe />
        <Footer />
      </div>
    </>
  );
}

export default App;
