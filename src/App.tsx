import "./App.css";
import Industry from "./components/Industry";
import LogoCarousel from "./components/LogoCarousel";
import ContactHeader from "./components/ContactHeader";
import Stack from "./components/Stack";
import Work from "./components/Work";
import github from "./assets/github.svg";
import instagram from "./assets/instagram.svg";
import linkedIn from "./assets/linkedIn.svg";
import BakerContour from "./components/BakerContour";
import RichText from "./components/RichText";

const SVGCOLOR = "rgb(255 156 171)";
//"rgb(0,255,197)";
const SVGSTROKE = 1;
const SVGLINE = "round";

function App() {
  // const [darkMode, setDarkMode] = useState(false);

  // useEffect(() => {
  //   if (darkMode) {
  //     document.documentElement.classList.add("dark");
  //     localStorage.setItem("theme", "dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //     localStorage.setItem("theme", "light");
  //   }
  // }, [darkMode]);

  return (
    <>
      <div id="bg">
        <div className="relative md:flex md:flex-column md:justify-center">
          <div className="w-full md:flex max-w-5xl">
            <div className="p-4 md:w-1/2">
              <div
                className=""
                style={{
                  width: "100%",
                  overflow: "hidden",
                  position: "relative",
                  zIndex: 1,
                  height: "400px",
                }}
              >
                <img
                  src="https://media.licdn.com/dms/image/v2/C5603AQFEK2r3qzJtHA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1534269517116?e=1740614400&v=beta&t=tDTldb139CVzArpKjkBE0XZpGtdId8gS4sZpXnGFmuU"
                  alt="tent"
                  style={{
                    objectFit: "cover",
                    objectPosition: "top",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
            </div>

            <div
              className="bg-yellow-200 mb-4 mr-4 p-4 md:w-1/2 md:bg-transparent md:flex md:justify-center md:items-center   "
              style={{
                position: "relative",
                zIndex: 2,
              }}
            >
              <div
                className="md:p-5 md:bg-yellow-200"
                style={{
                  border: `dashed ${SVGCOLOR} 2px`,
                }}
              >
                <h1>NIKOLAJ JUUEL JOHANSEN</h1>
                <h2>Software Developer</h2>
                <div>
                  <button className="flex mr-2">
                    <a href="#contact" className="flex">
                      <p style={{ paddingBottom: "0px" }}>Let's Chat</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              <BakerContour
                svgColor={SVGCOLOR}
                svgLine={SVGLINE}
                svgStroke={SVGSTROKE}
              />
            </div>
          </div>
        </div>
      </div>
      <RichText>
        <h3>About</h3>
        <p>
          Hi, I’m Nikolaj. I’ve been working in the tech industry for over five
          years. My journey began at a digital marketing start-up, where I
          gained hands-on experience in ad campaigns, web development and
          design.
        </p>
        <p>
          I then transitioned into a business development and strategy role,
          collaborating with clients to create comprehensive digital solutions
          tailored to their needs. This included setting up customer tracking
          and analytics, building features, designing custom landing pages, and
          optimizing the customer journey.
        </p>
        <p>
          Falling in love with the technical side of these projects inspired me
          to pursue a career as a full-stack software engineer. Nearly three
          years later, I’ve honed my skills and deepened my passion for solving
          complex challenges.
        </p>
        <p>
          I’m now seeking a new opportunity to continue growing, learning, and
          contributing to impactful projects.
        </p>
      </RichText>

      <div className="md:flex md:flex-column md:justify-center">
        <Industry />
      </div>
      <div
        className="md:flex md:flex-column md:justify-center"
        style={{
          background: "#ffe598",
        }}
      >
        <Stack />
      </div>

      <div
        className="md:flex md:flex-column md:justify-center"
        style={{
          background: "#ffe598",
        }}
      >
        <LogoCarousel />
      </div>
      <Work />
      <div className="bg-rose-600 text-white md:flex md:flex-column md:justify-center pt-8">
        <ContactHeader />
      </div>

      <div className="md:flex md:flex-column md:justify-center">
        <div
          className="w-full p-4 max-w-5xl md:flex md:flex-column md:justify-between"
          style={{
            listStyle: "none",
          }}
        >
          <div>
            <ul>
              <li>
                <strong>Nikolaj Juuel Johansen</strong>
              </li>
              <li>Vancouver</li>
              <li>604.442.6950</li>
              <li>nikolaj.juuel@gmail.com</li>
            </ul>
          </div>
          <div className="flex">
            <div className="w-14">
              <a
                href="https://www.linkedin.com/in/nikolajjohansen/"
                target="_blank"
              >
                <img src={linkedIn} alt="LinkedIn logo" />
              </a>
            </div>
            <div className="w-14">
              <a href="https://github.com/nikolajjuuel" target="_blank">
                <img src={github} alt="github logo" />
              </a>
            </div>
            <div className="w-14">
              <a href="https://www.instagram.com/nikolajjuuel/" target="_blank">
                <img src={instagram} alt="instagram logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div>Schedule an Appointment</div>
      <div>Socials</div> */}

      {/* <div className="flex md:bg-yellow-500 ">
        <div className="md:w-1/2">Im a text section 100 mobile 50 desktop</div>
        <div className="md:w-1/2">Im an img 100 mobile 50 desktop</div>
      </div>
      <button onClick={() => setDarkMode(!darkMode)}>
        {"Dark Mode Activated"}
      </button>
      <div className="bg-white dark:bg-slate-800"> im a contact container</div> */}
    </>
  );
}

export default App;
