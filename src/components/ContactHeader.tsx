import { useEffect, useRef, useState } from "react";
import Speaking from "../components/Speaking.tsx";
import ContactForm from "./ContactForm.tsx";
const ContactHeader = () => {
  const [dasharray] = useState([500, 3373]);
  const [dashoffset] = useState([0, 0]);
  const topRef = useRef<HTMLDivElement>(null);

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollPosition(currentScroll - 1200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={topRef}
      className="bg-rose-600 text-white "
      style={{ position: "relative", height: "3000px" }}
    >
      <div
        className="flex flex-col items-center max-w-5xl"
        style={{ position: "sticky", top: "140px" }}
      >
        <h3> Let's Connect</h3>
        <div className="w-3/5">
          <Speaking
            strokeDasharray={dasharray.toString()}
            strokeDashoffset={dashoffset[0] - scrollPosition}
          />
        </div>
        {/* <ContactForm /> */}
      </div>
    </div>
  );
};

export default ContactHeader;
