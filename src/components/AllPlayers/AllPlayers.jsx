import { useEffect, useState } from "react";
import Player from "../Player/Player";

export default function AllPlayers() {
  const [allPlayers, setAllPlayers] = useState([]);

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setAllPlayers(data));
  }, []);

  return (
    <>
      <div className="flex justify-between items-center my-6">
        <div>
          <h2 className="text-xl font-bold">Available Players</h2>
        </div>
        <div className="flex gap-3">
          <button className="btn">Available</button>
          <button className="btn">Selected (0)</button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
        {allPlayers.map((player, idx) => (
          <Player key={idx} player={player} />
        ))}
      </div>
    </>
  );
}
