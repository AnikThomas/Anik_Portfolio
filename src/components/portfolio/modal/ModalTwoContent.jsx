import React from "react";

const ModalTwoContent = () => {
  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3>Mario Pest Control Project</h3>
            {/* End .col */}

            <div className="col-12 col-sm-12 mb-2">
              <i className="fa fa-code pr-2"></i>
              <span className="project-label">Built with </span>:{" "}
              <span className="ft-wt-600 uppercase"> Html, Css, Javascript</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-12 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label">Preview : </span>
              <span className="ft-wt-600 uppercase">
                <a
                  href="https://mpc.anikthomas.tech/"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.mpc.anikthomas.tech
                </a>
              </span>
            </div>
            {/* End .col */}
       
          {/* End .row */}
        </figcaption>
        {/* Project Details Ends */}

        {/*  Main Project Content Starts */}
         <img src="img/projects/project-2.jpg" alt="Portolio" />
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalTwoContent;
