import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
  return (
    <div className="mt-10">
      <Banner />
      <CategoryList />
      <FeaturedJobs />
    </div>
  );
};

export default Home;
