import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Anik" },
  { meta: "last name", metaInfo: "Thomas" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "phone", metaInfo: "+1 (435) 200 - 7687" },
  { meta: "Email", metaInfo: "aniek.sw@mail.com" },
  { meta: "languages", metaInfo: "English and Bahasa" },
  { meta: "location", metaInfo: "Salt Lake City, Utah USA" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
