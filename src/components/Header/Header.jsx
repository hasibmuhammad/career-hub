import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex flex-col gap-8 md:gap-4 md:flex-row justify-between items-center mt-10">
        <Link>
          <img src="../../../assets/logo/CareerHub.png" alt="" />
        </Link>
        <div className="flex items-center gap-8">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/applied"}>Applied Jobs</NavLink>
          <NavLink to={"/blogs"}>Blogs</NavLink>
        </div>

        <button className="px-7 py-4 rounded-lg bg-gradient-to-r from-start to-end font-extrabold text-white">
          Start Applying
        </button>
      </div>
    </>
  );
};

export default Header;
