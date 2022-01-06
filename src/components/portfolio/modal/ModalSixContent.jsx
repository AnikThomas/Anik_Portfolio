import React from "react";

const ModalSixContent = () => {
  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3>React Native Ecommerce Project</h3>
            {/* End .col */}

            <div className="col-12 col-sm-12 mb-2">
              <i className="fa fa-code pr-2"></i>
              <span className="project-label">Built with: </span>:{" "}
              <span className="ft-wt-600 uppercase">HTML5, Bootstrap, JavaScript, React Native, Animation, Gestures, Redux</span>
            </div>
            {/* End .col */}
            
            <div className="col-12 col-sm-12 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label">Preview </span>:{" "}
              <span className="ft-wt-600 uppercase">
                <a
                  href="https://github.com/AnikThomas/ecommerce_App_Anitech"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.github.com/AnikThomas/ecommerce_App_Anitech
                </a>
              </span>
            </div>
            {/* End .col */}
         
          {/* End .row */}
        </figcaption>
        {/* Project Details Ends */}

        {/*  Main Project Content Starts */}
        <img src="img/projects/project-6.jpg" alt="Portolio" />
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalSixContent;
