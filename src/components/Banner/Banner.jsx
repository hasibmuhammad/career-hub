const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center">
      <div>
        <h1 className="font-bold text-5xl leading-tight">
          One Step <br />
          Closer To Your <br />
          <span className="bg-gradient-to-r from-start to-end bg-clip-text text-transparent">
            Dream Job
          </span>
        </h1>
        <p className="mt-6">
          Explore thousands of job opportunities with all the <br /> information
          you need. Its your future. Come find it. Manage all your job
          application from start to finish.
        </p>
        <div className="mt-6">
          <button className="px-7 py-4 rounded-lg bg-gradient-to-r from-start to-end font-extrabold text-white">
            Get Started
          </button>
        </div>
      </div>
      <div className="w-full">
        <img className="w-full" src="../../../assets/images/user.png" />
      </div>
    </div>
  );
};

export default Banner;
