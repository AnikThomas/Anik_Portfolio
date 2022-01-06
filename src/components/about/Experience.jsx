import React from "react";

const experienceContent = [
  {
    year: "2018 - 2019",
    position: " Entrepreneur",
    compnayName: "Anitech LLC",
    details: `Leader Management, advise leadership and staff. Developing, planning & implementing company's business strategies. Direct and control the company’s operations and to give strategic guidance and direction to the board to ensure that the company achieves its mission and objectives.`,
  },
  {
    year: "2020 - Present",
    position: "FullStack Developer Training Program",
    compnayName: "California Science and Technology University",
    details: `Use the technology of React and Node to create App and E-commerce site, working with the team to ensure the project running smooth and dynamic, helping with the design and development of software. Testing and debugging software to keep it optimized.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
