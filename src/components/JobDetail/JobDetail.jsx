import { useLoaderData, useParams } from "react-router-dom";
import { CiLocationOn, CiDollar } from "react-icons/ci";

const JobDetail = () => {
  const { id } = useParams();
  const jobs = useLoaderData();
  const job = jobs.find((j) => j.id === parseInt(id));
  console.log(jobs, job);
  return (
    <div className="relative bg-bg1 bg-no-repeat">
      <div className="bg-bg2 bg-no-repeat absolute h-full w-full bg-right-top -top-24 -z-50"></div>
      <div className="bg-gradient-to-r from-catBgStart to-catBgEnd h-56 w-full flex justify-center items-center">
        <h2 className="text-3xl font-extrabold">Job Details</h2>
      </div>

      <div className="max-w-7xl mx-auto mt-32 px-10 flex gap-4">
        <div className="space-y-8 w-2/3">
          <p className="text-justify">
            <span className="font-extrabold">Job Description: </span>
            {job.job_description}
          </p>
          <p className="text-justify">
            <span className="font-extrabold">Job Responsibility: </span>
            {job.job_responsibility}
          </p>
          <p className="text-justify">
            <span className="font-extrabold">Educational Requirements: </span>{" "}
            <br />
            <br />
            {job.educational_requirements}
          </p>
          <p className="text-justify">
            <span className="font-extrabold">Experiences: </span> <br />
            <br />
            {job.experiences}
          </p>
        </div>
        <div className="bg-gradient-to-r from-catBgStart to-catBgEnd p-7 rounded-md space-y-2">
          <h3 className="font-extrabold">Job Details</h3>
          <hr />
          <div className="flex items-center gap-1">
            <CiDollar className="font-bold text-lg text-start"></CiDollar>
            <p>
              {" "}
              <span className="font-bold">Salary: </span>
              {`${job.salary} (Per Month)`}{" "}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <CiDollar className="font-bold text-lg text-start"></CiDollar>
            <p>
              {" "}
              <span className="font-bold">Job Title: </span>
              {job.job_title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
