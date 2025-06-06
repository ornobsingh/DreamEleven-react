import AllPlayers from "../AllPlayers/AllPlayers";
import Selected from "../Selected/Selected";

export default function AvailablePlayersNav({
  handleIsActive,
  isActive,
  handleSelectedPlayer,
  selectedPlayer,
  handleDeletePlayer,
}) {
  return (
    <div>
      <div className="flex justify-between items-center my-6">
        <div>
          <h2 className="text-xl font-bold">
            {isActive.allPlayers
              ? `Available Players`
              : `Selected Player(${selectedPlayer.length}/6)`}
          </h2>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => handleIsActive("available")}
            className={isActive.allPlayers ? "btn active" : "btn"}
          >
            Available
          </button>
          <button
            onClick={() => handleIsActive("selected")}
            className={isActive.allPlayers ? "btn" : "btn active"}
          >
            Selected ({selectedPlayer.length})
          </button>
        </div>
      </div>

      {isActive.allPlayers ? (
        <AllPlayers handleSelectedPlayer={handleSelectedPlayer} />
      ) : (
        <Selected
          selectedPlayer={selectedPlayer}
          handleDeletePlayer={handleDeletePlayer}
          handleIsActive={handleIsActive}
        />
      )}
    </div>
  );
}
