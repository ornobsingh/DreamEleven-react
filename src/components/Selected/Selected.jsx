export default function Selected({
  selectedPlayer,
  handleDeletePlayer,
  handleIsActive,
}) {
  return (
    <div className="mt-10 mb-28">
      {selectedPlayer.map((player, idx) => (
        <div
          key={idx}
          className="flex justify-between items-center border rounded-xl mt-4"
        >
          <div className="flex justify-center items-center">
            <img
              className="w-36 h-24 object-cover rounded-xl p-3 mr-4"
              src={player.image}
              alt=""
            />
            <div>
              <p className="text-xs md:text-base font-medium">
                Name: <span className="text-gray-600">{player.name}</span>
              </p>
              <p className="text-xs md:text-base font-medium">
                Batting:{" "}
                <span className="text-gray-600">{player.battingType}</span>
              </p>
              <p className="text-xs md:text-base font-medium">
                Bowling:{" "}
                <span className="text-gray-600">{player.bowlingType}</span>
              </p>
            </div>
          </div>
          <div className="p-3">
            <div className="flex justify-end mr-2 mb-2">
              <button
                onClick={() => handleDeletePlayer(player.playerId)}
                className="btn px-3 hover:bg-red-600 duration-300 ease-in-out hover:text-white"
              >
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={() => handleIsActive("available")}
        className="btn mt-5 bg-[#E7FE29] hover:bg-[#fbfe9e] duration-300 ease-in-out"
      >
        Add More Player
      </button>
    </div>
  );
}
