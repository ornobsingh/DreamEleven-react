export default function Player({ player, handleSelectedPlayer }) {
  const { name, country, image, role, battingType, bowlingType, biddingPrice } =
    player;

  return (
    <>
      <div className="card bg-base-100 shadow-sm border">
        <figure className="px-6 py-5">
          <img
            className="h-48 w-96 object-cover rounded"
            src={image}
            alt="player"
          />
        </figure>
        <div className="card-body py-0 pb-4">
          <h2 className="card-title mb-1">
            <i className="fa-solid fa-user text-xl"></i>
            {name}
          </h2>
          <div className="flex justify-between items-center">
            <p className="text-gray-500">
              <i className="fa-solid fa-flag mr-2"></i>
              {country}
            </p>
            <div className="border rounded px-4 py-1 bg-transparent">
              {role}
            </div>
          </div>

          <div className="border border-b-1 border-gray-300 my-3"></div>

          <div className="text-gray-600 flex flex-col gap-2">
            <p className="text-md">
              <span className="text-base font-medium">Batting:</span>{" "}
              {battingType}
            </p>
            <p className="text-md">
              <span className="text-base font-medium">Bowling:</span>{" "}
              {bowlingType}
            </p>
            <p className="text-md">
              <span className="text-base font-medium">Price:</span> $
              {biddingPrice}
            </p>
          </div>

          <div className="card-actions">
            <button
              onClick={() => handleSelectedPlayer(player)}
              className="btn bg-[#E7FE29] hover:bg-[#fbfe9e] duration-300 ease-in-out"
            >
              Choose Player
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
