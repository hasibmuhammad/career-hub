import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();

  console.log(pathname.includes("/job/"));

  const navBg = pathname.includes("/job/")
    ? "bg-gradient-to-r from-catBgStart to-catBgEnd w-full pt-10"
    : "mt-10";

  return (
    <div className={`${navBg} px-10`}>
      <div
        className={`max-w-7xl mx-auto flex flex-col gap-8 md:gap-4 md:flex-row justify-between items-center `}
      >
        <Link>
          <img src="../../../assets/logo/CareerHub.png" />
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
    </div>
  );
};

export default Header;
