import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar lg:w-auto md:px-14 lg:mx-36 pt-10 mb-3 bg-orange-300">
      <div className="navbar-start">
        <div className="dropdown flex flex-1 md:flex-none">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost md:hidden"
          ></div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-1"
          >
            <li>
              <Link to="/">Home </Link>
            </li>
            <li>
              <Link to="/donation">Donation </Link>
            </li>
            <li>
              <Link to="/statistics">Statistics </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-1 md:flex-none pr-4 ">
          {/* <Link className="ml-40 w-48 mb-4 md:m-0 "> */}
          <span className="ml-40 w-48 mb-4 md:m-0 ">
            <img src="Logo.png" alt="" />
          </span>
          {/* </Link> */}
        </div>
      </div>
      <div className="navbar-end hidden md:flex">
        <ul className="menu md:gap-5 lg:gap-7 menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " text-orange-700 underline"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " text-orange-700 underline"
                  : ""
              }
            >
              Donation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " text-orange-700 underline"
                  : ""
              }
            >
              Statistics
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
