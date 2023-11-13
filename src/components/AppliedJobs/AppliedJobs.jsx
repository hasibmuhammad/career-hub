import { CiLocationOn, CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";
import { getAppliedJobs } from "../../utils/utils";
import { useEffect, useState } from "react";

const AppliedJobs = () => {
  const jobs = getAppliedJobs();
  const [filter, setFilter] = useState("");
  const [filterJobs, setFilterJobs] = useState(jobs);

  useEffect(() => {
    filter === "all" && setFilterJobs(jobs);
    filter === "onsite" &&
      setFilterJobs(jobs.filter((j) => j.remote_or_onsite === "Onsite"));
    filter === "remote" &&
      setFilterJobs(jobs.filter((jb) => jb.remote_or_onsite === "Remote"));
  }, [filter]);

  return (
    <div className="relative bg-bg1 bg-no-repeat">
      <div className="bg-bg2 bg-no-repeat absolute h-full w-full bg-right-top -top-24 -z-50"></div>
      <div className="bg-gradient-to-r from-catBgStart to-catBgEnd h-56 w-full flex justify-center items-center">
        <h2 className="text-3xl font-extrabold">Applied Jobs</h2>
      </div>

      <div className="max-w-7xl mx-auto mt-32 px-10 xl:px-0">
        <div className="text-right">
          <select
            className="px-3 py-2 bg-imgbg rounded-lg outline-none"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="">Filter By</option>
            <option value="all">All</option>
            <option value="remote">Remote</option>
            <option value="onsite">Onsite</option>
          </select>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-10">
          {filterJobs.length > 0 &&
            filterJobs.map((job) => (
              <div
                key={job.id}
                className="border border-border rounded-lg p-10 flex items-center justify-between"
              >
                <div className="flex items-center gap-8">
                  <img
                    className="bg-imgbg py-24 px-12 w-52"
                    src={job.logo}
                    alt={job.job_title}
                  />
                  <div>
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
                    <div className="flex items-center gap-8 mt-4">
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
                  </div>
                </div>
                <div>
                  <Link to={`/job/${job.id}`}>
                    <button className="bg-gradient-to-r from-start to-end px-7 py-3 rounded-lg font-extrabold text-white">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
