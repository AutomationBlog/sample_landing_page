import React from "react";
import PropTypes from "prop-types";

const FeaturesWithIcon = ({ value }) => {
  return (
    <>
      {value.map((value) => (
        <React.Fragment key={value.title}>
          <div className="col-lg-4">
            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
              <div className="features-icons-icon d-flex">
                <i className={value.contentIcon}></i>
              </div>
              <h3>{value.title}</h3>
              <p className="lead mb-0">{value.content}</p>
            </div>
          </div>
        </React.Fragment>
      ))}
    </>
  );
};

FeaturesWithIcon.propTypes = {
  value: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  contentIcon: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired,
};

export default FeaturesWithIcon;
