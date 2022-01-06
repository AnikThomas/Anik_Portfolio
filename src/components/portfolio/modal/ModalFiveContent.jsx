import React from "react";

const ModalFiveContent = () => {
  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3>ROCK THE VOTE APP</h3>
            {/* End .col */}

            <div className="col-12 col-sm-12 mb-2">
              <i className="fa fa-user-o pr-2"></i>
              <span className="project-label">Built with: </span>:{" "}
              <span className="ft-wt-600 uppercase">JavaScript, Node.js, ReactJS, Redux, Express, MongoDB, Mongoose, JSON</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label">Preview </span>:{" "}
              <span className="ft-wt-600 uppercase">
                <a
                  href="https://rtva.anikthomas.tech/"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.rtva.anikthomas.tech
                </a>
              </span>
            </div>
            {/* End .col */}
          
          {/* End .row */}
        </figcaption>
        {/* Project Details Ends */}

        {/*  Main Project Content Starts */}
        <img src="img/projects/project-5.jpg" alt="Portolio" />
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalFiveContent;
