const Work = () => {
  return (
    <div
      className="md:flex flex-col items-center pt-8 pb-8"
      style={{
        background: "rgb(255 189 93 / 62%)",
      }}
    >
      <div className="">
        <div className="md:flex max-w-5xl">
          <div className="md:w-1/2">
            <img
              src="/helm.jpeg"
              alt="Helm Chapter 2"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="work">Chapter 2</h3>
            <ul className="pl-8 pr-8 pt-4 pb-4">
              <li>
                Developed and enhanced features for Helm operations software
                used by marine companies moving over 90% of the world’s cargo.
              </li>
              <li>
                Improved front-end form validations, reducing API calls and
                enhancing user experience.
              </li>
              <li>
                Collaborated with senior developers to resolve complex technical
                challenges
              </li>
              <li>
                Introduced dark mode to facilitate night-time use by crew
                members
              </li>
              <li>Proactively reported and fixed bugs</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="">
        <div className="md:flex max-w-5xl md:flex-row-reverse">
          <div className="md:w-1/2 ">
            <img
              src="/champsys.png"
              alt="Champion System Riders"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="work">Champion System Canada</h3>
            <ul className="pl-8 pr-8 pt-4 pb-4">
              <li>New Strategy</li>
              <li>Customer Tracking</li>
              <li>Built New Website</li>
              <li>Introduced Individual Team Stores</li>
              <li>Developed Sales Script</li>
              <li>Helped generate over $250,000 in sales</li>
              <li>Graphic Design</li>
              <li>News Letters</li>
              <li>Promotions</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="">
        <div className="md:flex max-w-5xl ">
          <div className="md:w-1/2">
            <img
              src="/swim.jpg"
              alt="World Triathlon"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="work">World Trithalon Store</h3>
            <ul className="pl-8 pr-8 pt-4 pb-4">
              <li>New Website and E-commerce Platform</li>
              <li>Automated e-mails</li>
              <li>Changed client aquisition strategy</li>
              <li>Developed new checkout strategy</li>
              <li>Prototyped 3D modelling of products</li>
              <li>Helped generate over $200,000 in sales</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="">
        <div className="md:flex max-w-5xl md:flex-row-reverse">
          <div className="md:w-1/2">
            <img
              src="/wine.jpeg"
              alt="Lifford Wine Pre-Orders"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="work">Lifford Wine</h3>
            <ul className="pl-8 pr-8 pt-4 pb-4">
              <li>Strategy Implementation</li>
              <li>Custom Shopify Components</li>
              <li>Automation</li>
              <li>Custom Checkout</li>
              <li>
                Implemented Pre-orders & Wine Club Boosting Recurring Monthly
                Sales
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Work;
