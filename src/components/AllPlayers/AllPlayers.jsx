import { useEffect, useState } from "react";
import Player from "../Player/Player";
import "./AllPlayers.css";

export default function AllPlayers({ handleSelectedPlayer }) {
  const [allPlayers, setAllPlayers] = useState([]);

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setAllPlayers(data));
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
        {allPlayers.map((player, idx) => (
          <Player
            key={idx}
            player={player}
            handleSelectedPlayer={handleSelectedPlayer}
          />
        ))}
      </div>
    </>
  );
}
