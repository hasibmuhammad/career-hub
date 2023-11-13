import toast from "react-hot-toast";

const success = () => {
  toast.success("You have successfully applied!");
};

const failure = () => {
  toast.error("Already Applied for this job!");
};

const getAppliedJobs = () => {
  if (localStorage.getItem("applied")) {
    return JSON.parse(localStorage.getItem("applied"));
  } else {
    return [];
  }
};

const addAppliedJob = (job) => {
  const jobs = getAppliedJobs();

  if (jobs.length === 0) {
    localStorage.setItem("applied", JSON.stringify([...jobs, job]));
    success();
  } else {
    const filtered = jobs.filter((j) => j.id === job.id);
    console.log(filtered);
    if (filtered.length === 0) {
      localStorage.setItem("applied", JSON.stringify([...jobs, job]));
      success();
    } else {
      failure();
    }
  }
};

export { getAppliedJobs, addAppliedJob };
