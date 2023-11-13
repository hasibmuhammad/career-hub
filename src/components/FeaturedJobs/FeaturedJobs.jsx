import { CiLocationOn, CiDollar } from "react-icons/ci";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FeaturedJobs = () => {
  const [seeAll, setSeeAll] = useState(false);
  const [jobs, setJobs] = useState([]);
  const featuredJobs = jobs.slice(0, 4);

  const filteredJobs = seeAll ? jobs : featuredJobs;

  useEffect(() => {
    fetch("../../../data/jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="my-20">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-extrabold text-5xl">Featured Jobs</h1>
        <p className="mt-4">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 gap-8 mt-10">
        {filteredJobs.map((job) => (
          <div key={job.id} className="border border-border rounded-lg p-10">
            <img className="mb-5" src={job.logo} alt={job.job_title} />
            <h2 className="text-secondary text-2xl font-extrabold">
              {job.job_title}
            </h2>
            <h4 className="text-grayish1 font-medium text-lg">
              {job.company_name}
            </h4>
            <div className="flex gap-4 mt-4">
              <button className="px-4 py-2 border border-start bg-gradient-to-r from-start to-end bg-clip-text text-transparent rounded-md font-bold">
                {job.remote_or_onsite}
              </button>
              <button className="px-4 py-2 border border-start bg-gradient-to-r from-start to-end bg-clip-text text-transparent rounded-md font-bold">
                {job.job_type}
              </button>
            </div>
            <div className="mt-4 flex items-center gap-8">
              <div className="flex items-center gap-1">
                <CiLocationOn className="text-2xl"></CiLocationOn>
                <p className="text-grayish1 font-medium text-lg">
                  {job.location}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <CiDollar className="text-xl"></CiDollar>
                <p className="text-grayish1 font-medium text-lg">
                  Salary: {job.salary}
                </p>
              </div>
            </div>
            <div className="mt-4">
              <Link to={`/job/${job.id}`}>
                <button className="bg-gradient-to-r from-start to-end px-7 py-3 rounded-lg font-extrabold text-white">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {!seeAll && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setSeeAll(true)}
            className="bg-gradient-to-r from-start to-end px-7 py-3 rounded-lg font-extrabold text-white"
          >
            See All Jobs
          </button>
        </div>
      )}
    </div>
  );
};

export default FeaturedJobs;
