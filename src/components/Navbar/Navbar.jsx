import logo from "../../assets/logo.png";
import coin from "../../assets/dollar.png";

export default function Navbar({ increaseBalance }) {
  return (
    <div className="sticky top-0 z-10">
      <div className="navbar bg-white/30 backdrop-blur-lg rounded-b-md mb-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Fixture</a>
              </li>
              <li>
                <a>Teams</a>
              </li>
              <li>
                <a>Schedules</a>
              </li>
            </ul>
          </div>
          <img className="w-16" src={logo} alt="logo" />
        </div>

        <div className="navbar-end flex md:gap-4">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 flex md:gap-4 text-neutral-900 ">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Fixture</a>
              </li>
              <li>
                <a>Teams</a>
              </li>
              <li>
                <a>Schedules</a>
              </li>
            </ul>
          </div>
          <button className="btn flex items-center px-5 text-xs rounded-lg bg-[#fbfe9e]">
            {increaseBalance} Coin
            <img className="w-5" src={coin} alt="coin img" />
          </button>
        </div>
      </div>
    </div>
  );
}
