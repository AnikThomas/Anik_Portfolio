import React from "react";

const skillsContent = [
  { skillClass: "p99", skillPercent: "90", skillName: "HTML" },
  { skillClass: "p75", skillPercent: "75", skillName: "CSS / Bootstrap / UI - UX" },
  { skillClass: "p80", skillPercent: "80", skillName: "JAVASCRIPT" },
  { skillClass: "p70", skillPercent: "70", skillName: "Node - JS / EXPRESS" },
  { skillClass: "p80", skillPercent: "80", skillName: "GIT" },
  { skillClass: "p80", skillPercent: "80", skillName: "REACT & REACT NATIVE" },
  { skillClass: "p75", skillPercent: "75", skillName: "MONGO - DB" },
  { skillClass: "p70", skillPercent: "70", skillName: "Redux" },
  
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
