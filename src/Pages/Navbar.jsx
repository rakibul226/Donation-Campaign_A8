import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 md:px-14 lg:px-36 pt-10 justify-between ">
  <div className="navbar-start md:navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><a>Home</a></li>
      <li>
        <a href="">Donation</a>
      </li>
      <li><a>Statistics</a></li>
      </ul>
    </div>
    <Link to="/" className="ml-40 w-48 mb-4 md:m-0 text-xl"> <img src="../../public/Logo.png" alt="Donation"/></Link> 
  </div>
  <div className="navbar-end hidden md:flex">
    <ul className=" gap-5 justify-stretch menu-horizontal px-1 ">

      <li>
                    <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-gray-500 text-white underline px-4 py-2 rounded-md" : ""
                            }
                            >
                            Home
                    </NavLink>

        </li>
        <li>
                    <NavLink
                            to="./Donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-gray-500 text-white underline px-4 py-2 rounded-md" : ""
                        }
                            >
                            Donation
                    </NavLink>

        </li>
        <li>
                    <NavLink
                            to="./Statistics"
                            className={({ isActive, isPending }) =>
                                 isPending ? "pending" : isActive ? "bg-gray-500 text-white underline px-4 py-2 rounded-md" : ""
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