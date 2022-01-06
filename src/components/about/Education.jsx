import React from "react";

const educationContent = [
  {
    year: "2005",
    degree: "ENGINEERING DEGREE",
    institute: "National Institute of Technology Malang",
    details: `ITN Malang is a private university of technology in Malang, East Java, Indonesia.`,
  },
  {
    year: "2018",
    degree: "FullStack Web Development",
    institute: "V-School, SLC - Utah",
    details: `Coding school for developers, V Schools MERN stack (MongoDB, Express, React, Node.js) immersive coding program
HTML, CSS, JavaScript, React, Redux, Node.js, Express.js, MongoDB, Problem Solving, Unit Testing, Version Control.`,
  },
  {
    year: "2021",
    degree: "FullStack Web & Mobile Development",
    institute: "Nucamp",
    details: `Coding Bootcamp focus on Multiplatform Web - Mobile App Development with React - React Native and Server-side Development with NodeJS, Express and MongoDB`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
