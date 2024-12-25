import { useEffect, useRef, useState } from "react";
import aws from "../assets/aws.svg";
import c_sharp from "../assets/c_sharp.svg";
import css from "../assets/css.svg";
import cypress from "../assets/cypress.svg";
import github from "../assets/github.svg";
import html from "../assets/html.svg";
import java_script from "../assets/java_script.svg";
import jest from "../assets/jest.svg";
import mocha from "../assets/mocha.svg";
import mui from "../assets/mui.svg";
import next_js from "../assets/next_js.svg";
import sass from "../assets/scss.svg";
import storybook from "../assets/storybook.svg";
import vercel from "../assets/vercel.svg";
import vitest from "../assets/vitest.svg";

const LogoCarousel = () => {
  const progress = useRef(0);
  const speed = useRef(0.3);
  const logosRef = useRef<HTMLDivElement>(null);
  const logoWidthRef = useRef<HTMLImageElement>(null);
  const direction = useRef(0);

  const [style, setStyle] = useState({});

  const movement = () => {
    if (direction.current === 0) {
      progress.current -= speed.current;
    } else {
      progress.current += speed.current;
    }

    if (logosRef.current && logoWidthRef.current && direction.current === 0) {
      let rightEdge = logosRef.current.getBoundingClientRect().right;
      let lastLogoRightEdge =
        logoWidthRef.current.getBoundingClientRect().right;

      if (rightEdge > lastLogoRightEdge && direction.current === 0) {
        direction.current = 1;
      }
    }

    if (direction.current === 1 && progress.current >= 0) {
      direction.current = 0;
    }

    setStyle({
      transform: `translateX(${progress.current}px)`,
    });
    requestAnimationFrame(movement);
  };

  useEffect(() => {
    movement();
  }, []);

  return (
    <>
      <div className="carousel-container pb-4">
        <div className="carousel max-w-5xl">
          <div
            className="directions"
            onMouseEnter={() => (direction.current = 1)}
          >
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
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </div>

          <div
            className="slow pb-5"
            onMouseEnter={() => (speed.current = 0.2)}
            onMouseLeave={() => (speed.current = 0.3)}
            ref={logosRef}
          >
            <div className="logos" style={style}>
              <img
                src={aws}
                className="logo"
                onMouseEnter={() => (speed.current = 0)}
                onMouseLeave={() => (speed.current = 0.3)}
                alt="AWS logo"
              />
              <img
                src={c_sharp}
                className="logo"
                onMouseEnter={() => (speed.current = 0)}
                onMouseLeave={() => (speed.current = 0.3)}
                alt="C# logo"
              />
              <img
                src={css}
                className="logo"
                onMouseEnter={() => (speed.current = 0)}
                onMouseLeave={() => (speed.current = 0.3)}
                alt="CSS logo"
              />
              <img
                src={cypress}
                className="logo"
                onMouseEnter={() => (speed.current = 0)}
                onMouseLeave={() => (speed.current = 0.3)}
                alt="Cypress logo"
              />
              <img
                src={github}
                className="logo"
                onMouseEnter={() => (speed.current = 0)}
                onMouseLeave={() => (speed.current = 0.3)}
                alt="Github logo"
              />
              <img
                src={html}
                className="logo"
                onMouseEnter={() => (speed.current = 0)}
                onMouseLeave={() => (speed.current = 0.3)}
                alt="HTML5 logo"
              />
              <img
                src={java_script}
                className="logo"
                onMouseEnter={() => (speed.current = 0)}
                onMouseLeave={() => (speed.current = 0.3)}
                alt="JavaScript logo"
              />
              <img
                src={jest}
                className="logo"
                onMouseEnter={() => (speed.current = 0)}
                onMouseLeave={() => (speed.current = 0.3)}
                alt="Jest logo"
              />
              <img
                src={mocha}
                className="logo"
                onMouseEnter={() => (speed.current = 0)}
                onMouseLeave={() => (speed.current = 0.3)}
                alt="Mocha logo"
              />
              <img
                src={mui}
                className="logo"
                onMouseEnter={() => (speed.current = 0)}
                onMouseLeave={() => (speed.current = 0.3)}
                alt="MUI logo"
              />
              <img
                src={next_js}
                className="logo"
                onMouseEnter={() => (speed.current = 0)}
                onMouseLeave={() => (speed.current = 0.3)}
                alt="Next JS logo"
              />
              {/* <img
                src={ruby}
                className="logo"
                onMouseEnter={() => (speed.current = 0)}
                onMouseLeave={() => (speed.current = 0.3)}
                alt="Ruby logo"
              /> */}
              <img
                src={sass}
                className="logo"
                onMouseEnter={() => (speed.current = 0)}
                onMouseLeave={() => (speed.current = 0.3)}
                alt="SASS logo"
              />
              <img
                src={storybook}
                className="logo"
                onMouseEnter={() => (speed.current = 0)}
                onMouseLeave={() => (speed.current = 0.3)}
                alt="Storybook logo"
              />
              <img
                src={vercel}
                className="logo"
                onMouseEnter={() => (speed.current = 0)}
                onMouseLeave={() => (speed.current = 0.3)}
                alt="Vercel logo"
              />
              <img
                ref={logoWidthRef}
                src={vitest}
                className="logo"
                alt="Vitest logo"
              />
            </div>
          </div>
          <div
            className="directions"
            onMouseEnter={() => (direction.current = 0)}
          >
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
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogoCarousel;
