import { useLoaderData, useParams } from "react-router-dom";
import { CiDollar, CiLocationOn, CiMail } from "react-icons/ci";
import { PiSubtitlesLight } from "react-icons/pi";
import { BsTelephone } from "react-icons/bs";
import { Toaster } from "react-hot-toast";
import { addAppliedJob } from "../../utils/utils";

const JobDetail = () => {
  const { id } = useParams();
  const jobs = useLoaderData();
  const job = jobs.find((j) => j.id === parseInt(id));

  const handleApply = (job) => {
    addAppliedJob(job);
  };

  return (
    <div className="relative bg-bg1 bg-no-repeat">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="bg-bg2 bg-no-repeat absolute h-full w-full bg-right-top -top-24 -z-50"></div>
      <div className="bg-gradient-to-r from-catBgStart to-catBgEnd h-56 w-full flex justify-center items-center">
        <h2 className="text-3xl font-extrabold">Job Details</h2>
      </div>

      <div className="max-w-7xl mx-auto mt-32">
        <div className="flex flex-col items-center md:items-start md:flex-row gap-4 px-10 lg:px-0">
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
          <div>
            <div className="bg-gradient-to-r from-catBgStart to-catBgEnd p-7 rounded-md">
              <div className="space-y-4">
                <h3 className="font-extrabold">Job Details</h3>
                <hr className="border border-b-start opacity-20" />
                <div className="flex items-center gap-1">
                  <CiDollar className="font-bold text-lg text-start"></CiDollar>
                  <p>
                    {" "}
                    <span className="font-bold">Salary: </span>
                    {`${job.salary} (Per Month)`}{" "}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <PiSubtitlesLight className="font-bold text-lg text-start"></PiSubtitlesLight>
                  <p>
                    {" "}
                    <span className="font-bold">Job Title: </span>
                    {job.job_title}
                  </p>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                <h3 className="font-extrabold">Contact Information</h3>
                <hr className="border border-b-start opacity-20" />
                <div className="flex items-center gap-1">
                  <BsTelephone className="font-bold text-lg text-start"></BsTelephone>
                  <p>
                    {" "}
                    <span className="font-bold">Phone: </span>
                    {`${job.contact_information.phone}`}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <CiMail className="font-bold text-lg text-start"></CiMail>
                  <p>
                    {" "}
                    <span className="font-bold">Email: </span>
                    {job.contact_information.email}
                  </p>
                </div>
                <div className="flex gap-1">
                  <CiLocationOn className="mt-1 font-bold text-lg text-start"></CiLocationOn>
                  <p>
                    {" "}
                    <span className="font-bold">Address: </span>
                    {job.contact_information.address}
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleApply(job)}
              className="w-full mt-6 px-7 py-4 rounded-lg bg-gradient-to-r from-start to-end font-extrabold text-white"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
