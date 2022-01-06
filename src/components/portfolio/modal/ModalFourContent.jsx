import React from "react";

const ModalFourContent = () => {
  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3>RESTAURANT FINDER PROJECT</h3>
            {/* End .col */}

            <div className="col-12 col-sm-12 mb-2">
              <i className="fa fa-user-o pr-2"></i>
              <span className="project-label">Built with: </span>:{" "}
              <span className="ft-wt-600 uppercase">JavaScript, Node.js, ReactJS, Redux, Express, HTML, CSS </span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-12 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label">Preview </span>:{" "}
              <span className="ft-wt-600 uppercase">
                <a
                  href="https://rf.anikthomas.tech/"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.rf.anikthomas.tech
                </a>
              </span>
            </div>
            {/* End .col */}
         
          {/* End .row */}
        </figcaption>
        {/* Project Details Ends */}

        {/*  Main Project Content Starts */}
        <div className="videocontainer">
          <video
            id="video"
            className="responsive-video"
            controls
            poster="img/projects/project-4.jpg"
          >
            {/* <source src="img/projects/video.mp4" type="video/mp4" /> */}
          </video>
        </div>
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalFourContent;
