import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ModalThreeContent = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
  };

  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3>E-Commerce Project</h3>
            {/* End .col */}

            <div className="col-12 col-sm-12 mb-2">
              <i className="fa fa-code pr-2"></i>
              <span className="project-label">Built with: </span>:{" "}
              <span className="ft-wt-600 uppercase">HTML, CSS, Bootstrap, Javascript, React</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label">Preview </span>:{" "}
              <span className="ft-wt-600 uppercase">
                <a
                  href="http://anitech.anikthomas.tech/"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.anitech.anikthomas.tech
                </a>
              </span>
            </div>
            {/* End .col */}
         
          {/* End .row */}
        </figcaption>
        {/* Project Details Ends */}

        {/*  Main Project Content Starts */}
        <Slider {...settings}>
          <div className="slide_item">
            <img src="img/projects/project-3.jpg" alt="slide 1" />
          </div>
          <div className="slide_item">
            <img src="img/projects/project-3-1.jpg" alt="slide 1" />
          </div>
          <div className="slide_item">
            <img src="img/projects/project-3-2.jpg" alt="slide 1" />
          </div>
        </Slider>
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalThreeContent;
