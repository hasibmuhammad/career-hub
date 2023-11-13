import { useLocation } from "react-router-dom";
import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
  return (
    <div className="mt-10 max-w-7xl mx-auto">
      <Banner />
      <CategoryList />
      <FeaturedJobs />
    </div>
  );
};

export default Home;
