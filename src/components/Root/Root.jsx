import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Root = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-10">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
