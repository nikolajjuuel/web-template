import Circles from "./Circles";
import Squares from "./Squares";
import Triangles from "./Triangles";

const Industry = () => {
  return (
    <div className="w-full p-4 max-w-5xl">
      <div className="text-center ">
        <h3>Industry Experience</h3>
      </div>
      <div className="md:flex ">
        <div className="flex md:w-1/3 flex-col items-center justify-center">
          <div className="p-2">
            <Circles />
          </div>
          <h4>Business Strategy</h4>
          <p>3 Years</p>
        </div>
        <div className="flex md:w-1/3 flex-col items-center justify-center">
          <div className="p-2">
            <Triangles />
          </div>
          <h4>Software Development</h4>
          <p>2.5 Years</p>
        </div>
        <div className="flex md:w-1/3 flex-col items-center justify-center">
          <div className="p-2">
            <Squares />
          </div>
          <h4>Marketing</h4>
          <p>4 Years</p>
        </div>
      </div>
    </div>
  );
};
export default Industry;
