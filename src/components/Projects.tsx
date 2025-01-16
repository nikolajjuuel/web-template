const Projects = () => {
  return (
    <div className="w-full p-4 max-w-5xl">
      <div className="text-center ">
        <h3>Projects</h3>
      </div>
      <div className="md:flex md:flex-wrap ">
        <div className="flex md:w-1/3 flex-col items-center justify-center">
          <div className="p-2"></div>
          <img src="/speaking.png" alt="Speaking Heads" />
          <h4>Speaking Heads</h4>
          <p>View</p>
          <p>GitHub</p>
        </div>
        <div className="flex md:w-1/3 flex-col items-center justify-center">
          <div className="p-2"></div>
          <h4>Software Development</h4>
          <p>2.5 Years</p>
        </div>
        <div className="flex md:w-1/3 flex-col items-center justify-center">
          <div className="p-2"></div>
          <h4>Marketing</h4>
          <p>4 Years</p>
        </div>
        <div className="flex md:w-1/3 flex-col items-center justify-center">
          <div className="p-2"></div>
          <h4>Marketing</h4>
          <p>4 Years</p>
        </div>
        <div className="flex md:w-1/3 flex-col items-center justify-center">
          <div className="p-2"></div>
          <h4>Marketing</h4>
          <p>4 Years</p>
        </div>
        <div className="flex md:w-1/3 flex-col items-center justify-center">
          <div className="p-2"></div>
          <h4>Marketing</h4>
          <p>4 Years</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
