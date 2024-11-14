import React, { useRef } from "react";

const Section = () => {
  const sectionOneRef = useRef(null);
  const sectionSecondRef = useRef(null);

  const sectionOne = () =>
    sectionOneRef.current.scrollIntoView({ behavior: "smooth" });
  const sectionTwo = () =>
    sectionSecondRef.current.scrollIntoView({ behavior: "smooth" });
  return (
    <div>
      <button onClick={sectionOne}>Section one</button>
      <button onClick={sectionTwo}>Section second</button>

      <div ref={sectionOneRef} className="section1">
        Section1
      </div>
      <div ref={sectionSecondRef} className="section2">
        Section2
      </div>
    </div>
  );
};

export default Section;
