import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 md:px-14 lg:px-36 pt-10 mb-3">
  <div className="navbar-start">
    <div className="dropdown flex flex-1 md:flex-none">
      <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-1">
        <li><Link to="/">Home </Link></li>
        <li><Link to="/donation">Donation </Link></li>
        <li><Link to="/statistics">Statistics </Link></li>
      </ul>
    </div>
    <div className="flex flex-1 md:flex-none pr-2 ">
    <Link to="/" className="ml-40 w-48 mb-4 md:m-0 "> <img src="../../public/Logo.png" alt="" /></Link>

    </div>
  </div>
  <div className="navbar-end hidden md:flex">
    <ul className="menu md:gap5 lg:gap-10 menu-horizontal px-1">

      <li>
                    <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " text-orange-700 underline" : ""
                            }
                            
                            >
                            Home
                    </NavLink>

        </li>
        <li>
                    <NavLink
                            to="./Donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " text-orange-700 underline" : ""
                            }
                            >
                            Donation
                    </NavLink>

        </li>
        <li>
                    <NavLink
                            to="./Statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " text-orange-700 underline" : ""
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